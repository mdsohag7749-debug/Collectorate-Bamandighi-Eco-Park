const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// ===== MIDDLEWARE =====
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('.'));

// ===== CONTACTS DATABASE FILE =====
const contactsFile = path.join(__dirname, 'data', 'contacts.json');

// Ensure data directory exists
if (!fs.existsSync(path.join(__dirname, 'data'))) {
  fs.mkdirSync(path.join(__dirname, 'data'));
}

// ===== HELPER FUNCTIONS =====
function getContacts() {
  try {
    if (fs.existsSync(contactsFile)) {
      const data = fs.readFileSync(contactsFile, 'utf8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.log('Error reading contacts file:', error);
  }
  return [];
}

function saveContact(contactData) {
  try {
    const contacts = getContacts();
    const newContact = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      ...contactData,
      status: 'নতুন'
    };
    contacts.push(newContact);
    fs.writeFileSync(contactsFile, JSON.stringify(contacts, null, 2));
    return newContact;
  } catch (error) {
    console.error('Error saving contact:', error);
    throw error;
  }
}

function deleteContact(id) {
  try {
    let contacts = getContacts();
    contacts = contacts.filter(c => c.id !== parseInt(id));
    fs.writeFileSync(contactsFile, JSON.stringify(contacts, null, 2));
    return true;
  } catch (error) {
    console.error('Error deleting contact:', error);
    throw error;
  }
}

function updateContactStatus(id, status) {
  try {
    let contacts = getContacts();
    const contact = contacts.find(c => c.id === parseInt(id));
    if (contact) {
      contact.status = status;
      fs.writeFileSync(contactsFile, JSON.stringify(contacts, null, 2));
      return contact;
    }
    return null;
  } catch (error) {
    console.error('Error updating contact:', error);
    throw error;
  }
}

// ===== API ROUTES =====

// Submit contact form
app.post('/api/contact', (req, res) => {
  try {
    const { name, phone, email, subject, message } = req.body;

    // Validation
    if (!name || !message) {
      return res.status(400).json({
        success: false,
        message: 'নাম এবং বার্তা আবশ্যক!'
      });
    }

    const newContact = saveContact({
      name,
      phone: phone || '',
      email: email || '',
      subject: subject || 'অন্যান্য',
      message,
      ipAddress: req.ip
    });

    res.status(201).json({
      success: true,
      message: 'আপনার বার্তা সফলভাবে পাঠানো হয়েছে! ধন্যবাদ।',
      data: newContact
    });
  } catch (error) {
    console.error('Error in contact submission:', error);
    res.status(500).json({
      success: false,
      message: 'বার্তা পাঠাতে সমস্যা হয়েছে। পরে চেষ্টা করুন।'
    });
  }
});

// Get all contacts (protected - requires admin password)
app.get('/api/contacts', (req, res) => {
  try {
    const contacts = getContacts();
    res.json({
      success: true,
      count: contacts.length,
      data: contacts.reverse() // Latest first
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'যোগাযোগ তথ্য পেতে ব্যর্থ'
    });
  }
});

// Delete contact
app.delete('/api/contact/:id', (req, res) => {
  try {
    const { id } = req.params;
    deleteContact(id);
    res.json({
      success: true,
      message: 'যোগাযোগ মুছে ফেলা হয়েছে'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'মুছতে ব্যর্থ'
    });
  }
});

// Update contact status
app.put('/api/contact/:id/status', (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const updated = updateContactStatus(id, status);
    if (updated) {
      res.json({
        success: true,
        message: 'স্থিতি আপডেট করা হয়েছে',
        data: updated
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'যোগাযোগ পাওয়া যায়নি'
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'আপডেট ব্যর্থ'
    });
  }
});

// Get contact stats
app.get('/api/stats', (req, res) => {
  try {
    const contacts = getContacts();
    const stats = {
      total: contacts.length,
      new: contacts.filter(c => c.status === 'নতুন').length,
      replied: contacts.filter(c => c.status === 'উত্তর দেওয়া হয়েছে').length,
      pending: contacts.filter(c => c.status === 'পেন্ডিং').length
    };
    res.json({
      success: true,
      data: stats
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'পরিসংখ্যান পেতে ব্যর্থ'
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'সার্ভার সচল আছে',
    timestamp: new Date().toISOString()
  });
});

// ===== START SERVER =====
app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════════╗
║  বামনদিঘি ইকো পার্ক সার্ভার             ║
║  Bamandighi Eco Park Server              ║
╠════════════════════════════════════════════╣
║  🚀 সার্ভার চলছে: http://localhost:${PORT}  ║
║                                            ║
║  📧 Contact API: POST /api/contact        ║
║  👁️ Admin Panel: /admin-panel.html         ║
║  📊 Stats: GET /api/stats                  ║
╚════════════════════════════════════════════╝
  `);
});

// ===== ERROR HANDLING =====
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    success: false,
    message: 'একটি ত্রুটি ঘটেছে'
  });
});
