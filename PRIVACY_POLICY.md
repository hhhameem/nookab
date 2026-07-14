# Privacy Policy

**Last updated: July 2026**

---

## 1. Introduction

Nookab ("the App," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we handle your information when you use our vocabulary learning application.

Nookab is designed to be **offline-first and privacy-preserving by default**. All user data accessed by the App is processed strictly locally on the user's device and is never transmitted off-device to us or any third party, unless you explicitly initiate a transfer (e.g., via manual CSV export).

By using the App, you agree to the practices described in this Privacy Policy. If you do not agree, please do not use the App.

Capitalized terms used but not defined in this Privacy Policy have the meanings assigned to them in the Terms and Conditions.

## 2. Information Processed Locally on Your Device

Because the App utilizes purely on-device access and processing, the data listed below remains within your exclusive physical possession and control.

### 2.1 Data You Input and Manage

The App stores the following data locally within its private sandbox directory:

- **Vocabulary Data**: The words and phrases you manually add, including their translations, definitions, example sentences, parts of speech, and grammatical attributes
- **Practice History**: Records of your practice sessions, including correct/incorrect answers, response times, and mastery levels per word
- **Profile Information**: The display name, greeting title (if any), and profile photo you choose to set (profile photos are accessed via the secure native system picker and copied directly to the App's local sandboxed directory)
- **App Preferences**: Your language settings, notification preferences, theme selection, and other configuration choices
- **Statistics**: Aggregated usage data such as total practice time, words learned, and streak history

All of the above data is created and controlled entirely by you. No data is stored or processed without your direct, manual action.

### 2.2 Information We Do NOT Collect

We deliberately do **not** collect, view, or transmit any off-device information, including:

- **Personal Identifiers**: No email addresses, phone numbers, real names (unless voluntarily typed into your local profile), or government-issued IDs
- **Account Credentials**: No usernames, passwords, or authentication tokens — the App features no cloud account or registration system
- **Location Data**: No GPS, IP-based tracking, or geolocation information
- **Device Identifiers**: No device IDs, advertising IDs (GAID), IMEI numbers, serial numbers, or unique hardware identifiers
- **Usage Analytics**: No remote telemetry or background tracking of how you use the App
- **Automated Crash Logs**: No automatic collection or transmission of crash reports, diagnostic data, or performance metrics
- **Browsing History**: The App does not contain a web browser, nor does it deploy cookies, web beacons, or tracking pixels
- **System Permissions**: No access to your contact lists, camera, microphone, or social media graphs
- **Financial or Biometric Information**: No payment card data, bank details, or biometric logs (Face ID/Fingerprint information remains managed strictly by your mobile operating system)

### 2.3 Automatic Data and Ephemeral Network Requests

The App does **not** automatically collect any data. No telemetry, analytics SDKs, usage reporting components, background diagnostic scrapers, or outbound network requests are built into the application code. The App does not communicate with any external server during normal operation.

When you manually submit a support request or bug description via email, we will receive only the technical details and information you explicitly choose to include in that email communication. We strongly advise against sending sensitive personal information in support emails.

## 3. How Your Data is Used

Since all processing is confined to your local hardware, we do not process, view, analyze, or exploit your data in any way. Data remains on your device solely to facilitate the App's core features:

- Vocabulary data powers your personal dictionary, search engine, and review cycles
- Practice history enables spaced-repetition logic and progress calculation
- Profile details personalize the localized interface layout
- Preferences establish user-configured interface behaviors

**No Artificial Intelligence / Machine Learning Training**: We do **not** transmit, sell, or use any of your locally stored data—including vocabulary entries, custom definitions, or practice history—for artificial intelligence training, LLM fine-tuning, machine learning model development, automated profiling, or algorithmic analysis.

## 4. Data Storage, Security, and Destruction

### 4.1 Sandboxed Local Storage

All data is stored exclusively in a local SQLite database (`nookab.db`) within the App's isolated, secure application sandbox on your device storage. Profile photos are stored as isolated files inside the App's protected local document directory. Under standard mobile operating system security protocols, this sandbox isolates the App's data so that other applications installed on your device cannot access it.

### 4.2 Data Retention & Destruction

Your data remains stored on your device as long as the application remains installed. Data persists safely across normal app updates. You maintain full execution control over data destruction via the following methods:

- **Granular Removal**: Deleting specific vocabulary definitions or practice parameters directly within the interface
- **Bulk Clear**: Executing "Reset Practice Data" or "Delete All Words" options inside the Settings menu
- **Full Data Obliteration**: Uninstalling the application entirely from your device. Uninstallation triggers an immediate and permanent deletion of the application's entire private sandbox directory by the operating system. Because this data is never synchronized with an external server, the Developer cannot recover your data once the app is uninstalled.

### 4.3 Device-Level Security Measures

Because data storage is entirely local, the security of your information relies on your physical device security infrastructure. We strongly recommend securing your smartphone using a strong device passcode, PIN, or biometric lock, keeping your mobile operating system updated, and activating full-disk device encryption.

### 4.4 Software Vulnerability Disclosures

Because we do not operate remote databases, an external network-side data breach is technically impossible. However, if a software vulnerability is identified within the App code that could expose the local database sandbox to other malicious software on a device, we will disclose this transparently via in-app update banners and through the Google Play Store release notes, alongside immediate instructions on installing the corresponding security patch.

## 5. Third-Party Libraries and Data Sharing

### 5.1 Third-Party SDK Disclosures

The App does **not** sell, rent, lease, or share data. The App contains no commercial third-party SDKs, marketing trackers, programmatic ad servers, or telemetry aggregators.

### 5.2 User-Initiated Data Sharing (CSV Export)

The App provides a built-in CSV export tool that compiles your local vocabulary entries into a standard file format. When you trigger an export, you initiate an on-device transfer to a destination of your choice (such as local file directories, device memory, or an external communication app). Once exported, this file leaves the security boundaries of the App's sandbox. You are solely responsible for securing, sharing, or encrypting your exported CSV files.

### 5.3 Open-Source Software Dependencies

The App integrates open-source framework libraries solely to facilitate local system functionality. These packages operate strictly within your device environment and do not transmit data or generate outbound network pings:

- **Expo Core SDK** (including expo-sqlite, expo-sharing, expo-document-picker, expo-file-system)
- **React Native Framework** (and community layout utilities including react-native-svg, react-native-reanimated, react-native-safe-area-context, react-native-screens, expo-router)

## 6. Your Rights and Global Compliance

Because Nookab processes all data on-device, you enjoy direct, unfettered access to your information without needing to file a data disclosure request.

### 6.1 GDPR (EEA, United Kingdom, and Switzerland Compliance)

- **Data Controller**: The Developer acts as the data controller for the purpose of engineering the software. However, because data processing occurs entirely within your device hardware under your active execution, you retain operational control over your data.
- **Legal Basis**: Local processing is based on your consent provided during onboarding and is strictly necessary to perform the service requested (Articles 6(1)(a) and 6(1)(b) of the General Data Protection Regulation).
- **Your Rights**: You can fully exercise your rights to Access (Art. 15), Rectification (Art. 16), Erasure (Art. 17), Restriction of Processing (Art. 18), and Data Portability (Art. 20) instantly by interacting with the app's local settings, updating entries, or deleting the application.
- **Complaints**: You maintain the right to file a formal complaint with your local Data Protection Authority (Art. 77 GDPR), though we invite you to email us directly first to address any operational bugs.

### 6.2 CCPA/CPRA (California, USA Compliance)

- **Right to Know & Delete**: You hold complete visibility into your data directly through the interactive user interface. You may delete all collected attributes at any time using the in-app wipe features or by performing a full uninstallation.
- **No Sale or Sharing**: We do not sell, rent, or share consumer personal information with third parties. No "Do Not Sell My Info" mechanisms are required because no such tracking or monetizing activities take place.

## 7. Children's Privacy

The App is not targeted at or designed to attract children under 13 years of age. We do not knowingly collect, harvest, or request personal data from minors. Because the App operates entirely offline with zero network connectivity or tracker integration, it does not execute any behaviors restricted under the Children's Online Privacy Protection Act (COPPA) or the UK Age Appropriate Design Code.

If you are a parent or guardian and discover that a minor has entered personal information into the App, you can completely purge that data immediately by deleting the app from that child's device.

## 8. International Jurisdictions & Cross-Border Transfers

Because the App functions strictly offline and never transfers data off your hardware, no international data transmissions or cross-border data routing take place. Your data remains in your geographic location at all times.

## 9. Privacy Policy Updates

We reserve the right to modify this Privacy Policy to reflect future changes in our architecture or legal frameworks. If we ever decide to introduce network-dependent features, third-party analytics libraries, cloud synchronization systems, or in-app commercialization structures, we will publish a prominent, material in-app notification prior to implementation and request your explicit, renewed consent.

## 10. Contact Information

If you have any inquiries regarding this Privacy Policy or local data handling practices, please connect with us via:

**Email**: [contact.nookab@gmail.com](mailto:contact.nookab@gmail.com)  
**Developer**: Hanan Atelier
**Address**: Dhaka, Bangladesh
