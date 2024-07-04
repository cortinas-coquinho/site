// Your web app's Firebase configuration
// const firebaseConfig = {
// apiKey: "AIzaSyC_dDAmJPpwWNFVhLH-jiGT_249ceCKzMg",
//    authDomain: "cortinas-coquinho.firebaseapp.com",
//    projectId: "cortinas-coquinho",
//    storageBucket: "cortinas-coquinho.appspot.com",
//    messagingSenderId: "892263705625",
//    appId: "1:892263705625:web:847e68e5f752609b8ace88"
// };

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);



<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC_dDAmJPpwWNFVhLH-jiGT_249ceCKzMg",
    authDomain: "cortinas-coquinho.firebaseapp.com",
    projectId: "cortinas-coquinho",
    storageBucket: "cortinas-coquinho.appspot.com",
    messagingSenderId: "892263705625",
    appId: "1:892263705625:web:847e68e5f752609b8ace88",
    measurementId: "G-CCBG9EWMBH"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>