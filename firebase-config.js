// Firebase Configuration & Initialization
// bamandighi-eco-park Firebase Setup

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc, query, where, orderBy } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDZps09GP_LRv5qMxGnpyfgYkK1lrumq8",
  authDomain: "bamandighi-eco-park.firebaseapp.com",
  projectId: "bamandighi-eco-park",
  storageBucket: "bamandighi-eco-park.firebasestorage.app",
  messagingSenderId: "91989400198",
  appId: "1:91989400198:web:89f163e41c9a6045b9cf07",
  measurementId: "G-38J37ML3NF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

// ===== CONTACT MANAGEMENT FUNCTIONS =====

/**
 * সংস্পর্শ যোগ করুন (Add Contact)
 */
export async function addContact(contactData) {
  try {
    const docRef = await addDoc(collection(db, "contacts"), {
      ...contactData,
      timestamp: new Date().toISOString(),
      status: "নতুন",
      id: Date.now()
    });
    return {
      success: true,
      message: "আপনার বার্তা সফলভাবে পাঠানো হয়েছে! ধন্যবাদ।",
      id: docRef.id
    };
  } catch (error) {
    console.error("Error adding contact:", error);
    return {
      success: false,
      message: "বার্তা পাঠাতে ব্যর্থ। পরে চেষ্টা করুন।"
    };
  }
}

/**
 * সব সংস্পর্শ পান (Get All Contacts)
 */
export async function getAllContacts() {
  try {
    const querySnapshot = await getDocs(
      query(
        collection(db, "contacts"),
        orderBy("timestamp", "desc")
      )
    );
    
    const contacts = [];
    querySnapshot.forEach((doc) => {
      contacts.push({
        docId: doc.id,
        ...doc.data()
      });
    });
    
    return {
      success: true,
      count: contacts.length,
      data: contacts
    };
  } catch (error) {
    console.error("Error getting contacts:", error);
    return {
      success: false,
      count: 0,
      data: []
    };
  }
}

/**
 * সংস্পর্শ মুছুন (Delete Contact)
 */
export async function deleteContact(docId) {
  try {
    await deleteDoc(doc(db, "contacts", docId));
    return {
      success: true,
      message: "সংস্পর্শ মুছে ফেলা হয়েছে"
    };
  } catch (error) {
    console.error("Error deleting contact:", error);
    return {
      success: false,
      message: "মুছতে ব্যর্থ"
    };
  }
}

/**
 * সংস্পর্শের স্থিতি আপডেট করুন (Update Contact Status)
 */
export async function updateContactStatus(docId, status) {
  try {
    await updateDoc(doc(db, "contacts", docId), {
      status: status,
      updatedAt: new Date().toISOString()
    });
    return {
      success: true,
      message: "স্থিতি আপডেট হয়েছে"
    };
  } catch (error) {
    console.error("Error updating contact:", error);
    return {
      success: false,
      message: "আপডেট ব্যর্থ"
    };
  }
}

/**
 * পরিসংখ্যান পান (Get Statistics)
 */
export async function getStats() {
  try {
    const snapshot = await getDocs(collection(db, "contacts"));
    
    let total = 0;
    let newCount = 0;
    let pending = 0;
    let replied = 0;
    
    snapshot.forEach((doc) => {
      const data = doc.data();
      total++;
      
      if (data.status === "নতুন") newCount++;
      else if (data.status === "পেন্ডিং") pending++;
      else if (data.status === "উত্তর দেওয়া হয়েছে") replied++;
    });
    
    return {
      success: true,
      data: {
        total,
        new: newCount,
        pending,
        replied
      }
    };
  } catch (error) {
    console.error("Error getting stats:", error);
    return {
      success: false,
      data: {
        total: 0,
        new: 0,
        pending: 0,
        replied: 0
      }
    };
  }
}

/**
 * ফিল্টার করা সংস্পর্শ পান (Get Filtered Contacts)
 */
export async function getFilteredContacts(status) {
  try {
    let q;
    if (status) {
      q = query(
        collection(db, "contacts"),
        where("status", "==", status),
        orderBy("timestamp", "desc")
      );
    } else {
      q = query(
        collection(db, "contacts"),
        orderBy("timestamp", "desc")
      );
    }
    
    const querySnapshot = await getDocs(q);
    
    const contacts = [];
    querySnapshot.forEach((doc) => {
      contacts.push({
        docId: doc.id,
        ...doc.data()
      });
    });
    
    return {
      success: true,
      count: contacts.length,
      data: contacts
    };
  } catch (error) {
    console.error("Error filtering contacts:", error);
    return {
      success: false,
      count: 0,
      data: []
    };
  }
}

export { db, app };
