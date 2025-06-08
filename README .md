# 🌐 Annu Prajapati – Developer Portfolio

A fully responsive, single-page personal portfolio website built using **React.js** and **Tailwind CSS**, showcasing my skills, projects, and a contact form powered by **EmailJS**.

## 🚀 Features

- 💻 **Responsive Design** – Looks great on all screen sizes.
- 🧭 **Smooth Scroll Navigation** – Easily navigate to Home, About, Skills, Projects, and Contact sections.
- 📂 **Projects Showcase** – Highlights selected work with GitHub links.
- 📄 **Resume Download** – Allows users to download your resume in one click.
- 📬 **Contact Form** – Submit messages directly using EmailJS.
- 🌐 **Social Links** – LinkedIn, GitHub, and Email icons with hover effects.
- 🌓 **Tailwind CSS Styling** – Clean, modern, utility-first design.

---

## 📁 Folder Structure

```
portfolio/
├── public/
│   ├── resume.pdf
│   └── ...
├── src/
│   ├── assets/
│   │   └── home.jpg
│   ├── components/
│   │   ├── NavBar1.jsx
│   │   ├── Home1.jsx
│   │   ├── Contact1.jsx
│   │   └── ...
│   ├── App.jsx
│   └── index.js
├── .gitignore
├── package.json
├── tailwind.config.js
└── README.md
```

---

## 🛠️ Technologies Used

- **React.js**
- **Tailwind CSS**
- **EmailJS**
- **React Icons**
- **Netlify** (for deployment)

---

## 🧪 Getting Started Locally

1. **Clone the Repository**

```bash
git clone https://github.com/annuprajapati3/portfolio.git
cd portfolio
```

2. **Install Dependencies**

```bash
npm install
```

3. **Run the App**

```bash
npm run dev   # or npm start
```

4. **Build for Production**

```bash
npm run build
```

---

## ✉️ EmailJS Configuration

1. Create a free account at [https://www.emailjs.com](https://www.emailjs.com).
2. Get your:
   - `Service ID`
   - `Template ID`
   - `Public Key`
3. Replace the placeholders in `Contact1.jsx` with your actual EmailJS credentials.

---

## 🌍 Hosting on Netlify

To host this project:

1. Run `npm run build`
2. Go to [Netlify](https://www.netlify.com) and log in.
3. Drag and drop the `build/` folder into Netlify.
4. Or connect to GitHub for continuous deployment.
5. Set:
   ```
   Build Command: npm run build
   Publish Directory: build
   ```

To fix React Router 404 on refresh, create a `_redirects` file in `public/`:

```
/*    /index.html   200
```

---

## 📞 Contact

- 📧 Email: annuprajapati0004@gmail.com
- 🔗 LinkedIn: [Annu Prajapati](https://www.linkedin.com/in/annu-prajapati/)
- 💻 GitHub: [@annuprajapati3](https://github.com/annuprajapati3)

---

## 📃 License

This project is open source and available under the [MIT License](LICENSE).

---
