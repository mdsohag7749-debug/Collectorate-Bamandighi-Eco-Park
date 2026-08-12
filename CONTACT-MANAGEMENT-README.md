# 🌳 Collectorate Bamandighi Eco Park - Contact Management System

## ✅ সেটআপ সম্পূর্ণ!

আপনার ওয়েবসাইটের জন্য একটি **সম্পূর্ণ Contact Management System** এখন প্রস্তুত!

---

## 📋 সিস্টেম বর্ণনা

এই সিস্টেম আপনার ওয়েবসাইটের Contact ফর্ম থেকে সব যোগাযোগ সংগ্রহ করে এবং সংরক্ষণ করে। একটি শক্তিশালী **Admin Panel** দিয়ে আপনি সহজেই সব যোগাযোগ পরিচালনা করতে পারবেন।

---

## 🚀 দ্রুত শুরু করুন

### বিকল্প 1: দুটি টার্মিনাল এ চালান

**টার্মিনাল 1 - ব্যাকএন্ড সার্ভার:**
```bash
npm run server
```
চলবে: `http://localhost:5000`

**টার্মিনাল 2 - ফ্রন্টএন্ড সার্ভার:**
```bash
npm run dev
```
চলবে: `http://localhost:3000`

---

### বিকল্প 2: একটি কমান্ডে দুটোই চালান (সুপারিশকৃত)

```bash
npm run dev:all
```

এটি দুটো সার্ভার একসাথে চালাবে:
- **Frontend**: `http://localhost:3000`
- **Backend**: `http://localhost:5000`

---

## 📁 প্রকল্প কাঠামো

```
project/
├── server-backend.js ........... Express.js ব্যাকএন্ড
├── admin-panel.html ........... Admin Dashboard
├── index.html ................. মূল ওয়েবসাইট (Contact form সহ)
├── style.css .................. Styling
├── script.js .................. Frontend JavaScript
├── data/
│   └── contacts.json ......... যোগাযোগ ডাটাবেস
├── ar-viewer.html ............. AR Viewer
├── ar-guide.html .............. AR গাইড
└── package.json ............... Project configuration
```

---

## 🌐 অ্যাক্সেসযোগ্য পাতাগুলি

### ওয়েবসাইট
- **মূল পৃষ্ঠা**: `http://localhost:3000/index.html`
- **Contact Form**: `http://localhost:3000/index.html#contact`

### Admin ড্যাশবোর্ড
- **Admin Panel**: `http://localhost:3000/admin-panel.html`

### AR Features
- **AR Viewer**: `http://localhost:3000/ar-viewer.html`
- **AR Guide**: `http://localhost:3000/ar-guide.html`

---

## 💡 কীভাবে কাজ করে

### 1. ব্যবহারকারী Contact ফর্ম ব্যবহার করে

ব্যবহারকারী মূল ওয়েবসাইটে Contact Section-এ:
- নাম, ফোন, ইমেইল ভরে
- বিষয় নির্বাচন করে
- বার্তা লেখে
- "বার্তা পাঠান" বাটনে ক্লিক করে

### 2. ডাটা ব্যাকএন্ডে পাঠানো হয়

**Frontend** → `POST /api/contact` → **Backend**

### 3. ব্যাকএন্ড ডাটা সংরক্ষণ করে

ডাটা **`data/contacts.json`** ফাইলে JSON ফরম্যাটে সংরক্ষিত হয়।

### 4. Admin Panel এ দেখা যায়

Admin যোগাযোগকারী যেকোনো সময় **Admin Panel** খুলে:
- সব যোগাযোগ দেখতে পারে
- স্থিতি পরিবর্তন করতে পারে
- বিস্তারিত তথ্য দেখতে পারে
- প্রয়োজনে মুছে ফেলতে পারে

---

## 📊 Admin Panel ব্যবহার করুন

### স্ট্যাটিস্টিক্স দেখা
Dashboard এর শীর্ষে:
- 📊 **মোট যোগাযোগ**
- 🆕 **নতুন যোগাযোগ**
- ⏳ **পেন্ডিং যোগাযোগ**
- ✅ **উত্তর দেওয়া যোগাযোগ**

### যোগাযোগ পরিচালনা করা

1. **স্থিতি পরিবর্তন করা**:
   - স্ট্যাটাস কলামে ড্রপডাউন থেকে বেছে নিন:
     - 🆕 নতুন
     - ⏳ পেন্ডিং
     - ✅ উত্তর দেওয়া হয়েছে

2. **বিস্তারিত দেখা**:
   - "👁️ দেখুন" বাটনে ক্লিক করুন
   - Modal এ সম্পূর্ণ বিবরণ পাবেন

3. **মুছে ফেলা**:
   - "🗑️ মুছুন" বাটনে ক্লিক করুন
   - নিশ্চিতকরণের পর মুছে যাবে

4. **খোঁজা এবং ফিল্টার করা**:
   - সার্চ বক্সে নাম বা ইমেইল লিখুন
   - স্ট্যাটাস ফিল্টার ব্যবহার করুন

### রিফ্রেশ করা
"🔄 রিফ্রেশ" বাটনে ক্লিক করে সর্বশেষ ডাটা লোড করুন।

---

## 🔌 API এন্ডপয়েন্ট

### 1. Contact সাবমিট করা
```
POST /api/contact
Content-Type: application/json

{
  "name": "রহিম",
  "phone": "01712345678",
  "email": "rahim@example.com",
  "subject": "টিকেট বুকিং",
  "message": "আমি ৫ জনের টিকেট বুকিং করতে চাই"
}

Response:
{
  "success": true,
  "message": "আপনার বার্তা সফলভাবে পাঠানো হয়েছে! ধন্যবাদ।",
  "data": { ... }
}
```

### 2. সব Contact পেতে
```
GET /api/contacts

Response:
{
  "success": true,
  "count": 5,
  "data": [ ... ]
}
```

### 3. Contact এর স্থিতি আপডেট করা
```
PUT /api/contact/:id/status
Content-Type: application/json

{
  "status": "পেন্ডিং"
}
```

### 4. Contact মুছে ফেলা
```
DELETE /api/contact/:id
```

### 5. পরিসংখ্যান পেতে
```
GET /api/stats

Response:
{
  "success": true,
  "data": {
    "total": 5,
    "new": 2,
    "replied": 1,
    "pending": 2
  }
}
```

### 6. হেলথ চেক
```
GET /api/health

Response:
{
  "success": true,
  "message": "সার্ভার সচল আছে",
  "timestamp": "2026-08-13T..."
}
```

---

## 📝 Contact Data ফরম্যাট

**`data/contacts.json`** ফাইলে ডাটা এভাবে সংরক্ষিত থাকে:

```json
[
  {
    "id": 1692374400000,
    "timestamp": "2026-08-13T10:00:00.000Z",
    "name": "রহিম",
    "phone": "01712345678",
    "email": "rahim@example.com",
    "subject": "টিকেট বুকিং",
    "message": "আমি ৫ জনের টিকেট বুকিং করতে চাই",
    "status": "নতুন",
    "ipAddress": "127.0.0.1"
  },
  {
    "id": 1692374500000,
    "timestamp": "2026-08-13T10:05:00.000Z",
    "name": "ফাতিমা",
    "phone": "01812345678",
    "email": "fatima@example.com",
    "subject": "অনুষ্ঠান আয়োজন",
    "message": "কোয়ার্টার বার্ষিক পিকনিকের জন্য পার্ক বুক করতে চাই",
    "status": "পেন্ডিং",
    "ipAddress": "192.168.1.1"
  }
]
```

---

## 🐛 সমস্যা সমাধান

### সমস্যা: "Cannot POST /api/contact"
**কারণ**: ব্যাকএন্ড সার্ভার চলছে না
**সমাধান**: 
```bash
npm run server
```
চালান এবং চেক করুন সার্ভার পোর্ট 5000 এ চলছে কিনা।

---

### সমস্যা: Contact ফর্ম সাবমিট হচ্ছে না
**কারণ**: Validation error বা network issue
**সমাধান**:
1. Browser console খুলুন (F12)
2. Error message পড়ুন
3. সার্ভার চলছে নিশ্চিত করুন
4. Firewall চেক করুন

---

### সমস্যা: Admin Panel খালি দেখাচ্ছে
**কারণ**: Contact ফর্ম থেকে কোনো ডাটা নেই
**সমাধান**:
1. Contact ফর্মে একটি test বার্তা পাঠান
2. Admin Panel রিফ্রেশ করুন
3. ডাটা দেখা যাবে

---

### সমস্যা: Port 5000 ইতিমধ্যে ব্যবহারে আছে
**কারণ**: অন্য প্রোগ্রাম port 5000 ব্যবহার করছে
**সমাধান**: `server-backend.js` এ পোর্ট পরিবর্তন করুন:
```javascript
const PORT = process.env.PORT || 8000; // ৫০০০ এর জায়গায় ৮০০০
```

---

## 🔧 কাস্টমাইজেশন

### ব্যাকএন্ড পোর্ট বদলান
```javascript
// server-backend.js এর শেষে
const PORT = process.env.PORT || 5000; // এটি বদলান
```

### Validation Rules যোগ করা
```javascript
// server-backend.js এর handleFormSubmit এ
if (phone && !/^\+?[\d\s-]{10,}$/.test(phone)) {
  return res.status(400).json({
    success: false,
    message: 'ফোন নম্বর সঠিক নয়'
  });
}
```

### Email Notification যোগ করা
```bash
npm install nodemailer
```

তারপর `server-backend.js` এ:
```javascript
const nodemailer = require('nodemailer');

// সংরক্ষণের পরে
const mailOptions = {
  from: 'your-email@gmail.com',
  to: contactData.email,
  subject: 'আমরা আপনার বার্তা পেয়েছি',
  text: 'ধন্যবাদ, শীঘ্রই আমরা যোগাযোগ করব'
};

// ইমেইল পাঠান
```

---

## 📈 ভবিষ্যতের উন্নতি

✅ **করা হয়েছে**:
- ✓ Contact ফর্ম ইন্টিগ্রেশন
- ✓ Admin Panel
- ✓ JSON ডাটাবেস
- ✓ REST API
- ✓ Status ম্যানেজমেন্ট

📋 **করা যায় পরে**:
- [ ] Email Notification (nodemailer)
- [ ] SMS Notification (Twilio)
- [ ] MongoDB/MySQL ডাটাবেস
- [ ] User Authentication
- [ ] Export to CSV/Excel
- [ ] Advanced Analytics
- [ ] Auto-reply System
- [ ] WhatsApp Notification

---

## 📚 ফাইল বর্ণনা

### `server-backend.js`
Express.js সার্ভার যা:
- Contact ফর্ম ডাটা গ্রহণ করে
- JSON ফাইলে সংরক্ষণ করে
- Admin Panel API প্রদান করে

### `admin-panel.html`
সুন্দর Admin Dashboard যা:
- সব যোগাযোগ প্রদর্শন করে
- স্থিতি পরিচালনা করে
- খোঁজা এবং ফিল্টার করে
- বিস্তারিত তথ্য দেখায়

### `data/contacts.json`
আপনার contact database যেখানে:
- সব যোগাযোগ JSON আকারে সংরক্ষিত থাকে
- সরাসরি সম্পাদনা করা যায়
- ব্যাকআপ নেওয়া যায়

---

## 🔐 নিরাপত্তা টিপস

1. **পাসওয়ার্ড সুরক্ষা** যোগ করুন Admin Panel এ
2. **Rate Limiting** যোগ করুন ফর্ম সাবমিশনে
3. **Input Validation** করুন সার্ভার সাইডে
4. **HTTPS** ব্যবহার করুন প্রোডাকশনে
5. **Backup** নিন নিয়মিত

---

## ✨ বৈশিষ্ট্য সারাংশ

| বৈশিষ্ট্য | স্থিতি |
|----------|--------|
| Contact Form সংগ্রহ | ✅ |
| JSON ডাটাবেস | ✅ |
| Admin Panel | ✅ |
| Status ম্যানেজমেন্ট | ✅ |
| Search & Filter | ✅ |
| API Endpoints | ✅ |
| Delete Functionality | ✅ |
| Statistics | ✅ |
| Responsive Design | ✅ |
| Multi-language Support | ✅ |

---

## 📞 সাপোর্ট

সমস্যা বা প্রশ্ন থাকলে:
- Browser Console খুলুন (F12)
- Error Message পড়ুন
- Server Logs চেক করুন
- পুনরায় চেষ্টা করুন

---

## 🎉 উপসংহার

আপনার **Contact Management System** সম্পূর্ণভাবে প্রস্তুত এবং ব্যবহারের জন্য প্রস্তুত!

**এখনই শুরু করুন**:
```bash
npm run dev:all
```

তারপর ব্রাউজার খুলুন এবং যোগাযোগ সংগ্রহ শুরু করুন! 🚀

---

**Created**: 2026-08-13  
**Version**: 1.0  
**Status**: ✅ প্রোডাকশন রেডি
