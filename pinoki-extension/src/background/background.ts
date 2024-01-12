// import { ExtensionMessage } from "../@types/bg-cs-types";

// const connections: { [key: string]: chrome.runtime.Port } = {};

// chrome.runtime.onConnect.addListener((externalPort) => {
//   const extensionListener = (msg: ExtensionMessage, port: chrome.runtime.Port) => {
//     if (msg.action === 'getSelectedText') {
//       const selectedText = window.getSelection()?.toString();
//       externalPort.postMessage({ selectedText: selectedText });
//     }
//   };

//   externalPort.onDisconnect.addListener(() => {
//     externalPort.onMessage.removeListener(extensionListener);
//   });

//   externalPort.onMessage.addListener(extensionListener);

//   // Assign a unique ID to each connection
//   const connectionId = `${externalPort.sender?.id}-${externalPort.sender?.tab?.id}`;
//   connections[connectionId] = externalPort;
// });

// chrome.action.onClicked.addListener(tab => {
    
// })

import firebase from 'firebase/app';
import 'firebase/database';
import { firebaseConfig } from '../firebase/firebase.config';
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const dataRef = database.ref('data');