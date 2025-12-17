# 🔐 Cipher Cracker

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-cyan?logo=tailwindcss)

**Cipher Cracker** is a modern, interactive web tool designed to help you break substitution ciphers (like Caesar ciphers and ROT13) using **Frequency Analysis**. 

Built with the latest web technologies, it provides real-time data visualization and instant decryption capabilities in a sleek dark-mode interface.

---

## 📸 Screenshots

| **Frequency Analysis** | **Real-Time Decryption** |
|:---:|:---:|
| ![Frequency Analysis Chart](./assets/frequency-chart.jpeg) |

---

## ✨ Features

* **📊 Real-Time Frequency Analysis**: Instantly visualizes the letter distribution of any text you paste.
* **🕵️ Interactive Chart**: A custom-built bar chart (cyan/blue gradient) that highlights statistical anomalies to help identify shifts.
* **🔓 Instant Decryption**: A "Shift Slider" that rotates the alphabet in real-time (0-25), allowing you to crack the code without page reloads.
* **🌑 Sleek Dark Mode**: Designed for hackers and night owls, featuring a high-contrast UI with glowing accents.
* **⚡ Blazing Fast**: Powered by Next.js 15 and Turbopack for instant feedback.

---

## 🛠️ Tech Stack

* **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Charts:** Custom React Components (No heavy libraries)

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites
* Node.js (v18 or higher)
* npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/sakibmujbain/cipher-cracker.git](https://github.com/sakibmujbain/cipher-cracker.git)
    cd cipher-cracker
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Open your browser**
    Navigate to [http://localhost:3000](http://localhost:3000) to start cracking codes!

---

## 🧠 How to Use

### 1. Analyze the Text
Paste your encrypted text (Ciphertext) into the input box. The **Frequency Chart** will immediately populate.
* *Tip:* Look for the tallest bars. In English, **'E'** is usually the most common letter. If your tallest bar is at 'H', the shift might be +3 (since E -> F -> G -> H).

### 2. Crack the Code
Scroll down to the **Decryption Tool**.
* Drag the slider to shift the letters.
* Watch the **Decrypted Result** box update instantly.
* **Pro Tip:** If a cipher was shifted by **+3**, you need to shift it back. In the slider (which only adds), use **23** (because 26 - 3 = 23) to loop back around!

---

## 🤝 Contributing

Contributions are welcome! If you have ideas for new ciphers (like Vigenère or Affine), feel free to open an issue or submit a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">
  <p>Made with 💻 and ☕ by <b>Sakib</b></p>
</div>