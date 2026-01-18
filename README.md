# PromptPolish

Transform vague requests into clear, effective AI instructions with our smart prompt refinement tool.

## 🎯 About

PromptPolish is a web application designed to help users create better AI prompts. Instead of struggling with vague or unclear instructions, users can input their ideas in plain language, and PromptPolish intelligently refines them into detailed, actionable prompts that produce better AI responses.

## ✨ Features

- **Prompt Refinement**: Transform vague ideas into clear, detailed AI prompts
- **User Authentication**: Secure signup and login system with password validation
- **Prompt Library**: Browse and explore example prompts organized by category
- **How It Works Guide**: Learn the three-step process for better prompt crafting
- **Contact Support**: Get in touch with the team for feedback or issues
- **Copy & Download**: Easily copy polished prompts or download them as text files
- **Dark Mode**: Toggle between light and dark themes for comfortable viewing
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🚀 Quick Start

### Prerequisites
- Node.js (for local development)
- Modern web browser (Chrome, Firefox, Safari, Edge)
- n8n instance running locally or in the cloud (for backend workflows)
- Google Gemini API credentials (for AI refinement)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Barr-ack/promptAI.git
   cd prompt-polish-main
   ```

2. **Open in browser**
   ```bash
   # Simply open prompt.html in your browser, or
   # Use a local server:
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

3. **Configure n8n webhooks**
   - Ensure n8n is running (default: `http://localhost:5678`)
   - The application uses these webhook endpoints:
     - `/webhook-test/prompt` - Refine prompts
     - `/webhook-test/login` - Handle user login
     - `/webhook-test/signup` - Handle user registration
     - `/webhook-test/contact` - Process contact form submissions

4. **Set up backend data**
   - Google Sheets is used for storing:
     - User signup data
     - Contact form submissions
   - Update the Google Sheet URLs in `backend.json` with your own sheets

## 📁 Project Structure

```
prompt-polish-main/
├── index.html              # Redirect to main page
├── prompt.html             # Main landing page
├── prompt2.html            # Dashboard for logged-in users
├── output.html             # Polished prompt display
├── about.html              # About page
├── contact.html            # Contact form page
├── howItWorks.html         # How it works guide
├── login.html              # Login/Signup page
├── promptlibrary.html      # Browse prompt examples
│
├── *.js                    # JavaScript files (script.js, output.js, etc.)
├── *.css                   # Styling files
│
├── backend.json            # n8n workflow configuration
├── assets/                 # Images and static assets
│
└── Hackathon/              # Alternative UI variant
    ├── index.html
    ├── login.html
    ├── pin.js
    ├── styles.css
    └── assets/
```

## 🔄 How It Works

1. **User enters an idea**: Type a vague or incomplete prompt into the textarea
2. **AI refinement**: The prompt is sent to Google Gemini via n8n for intelligent enhancement
3. **Get polished prompt**: Receive a detailed, well-structured prompt ready to use
4. **Copy or download**: Share the refined prompt or save it locally

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Styling Framework**: Tailwind CSS
- **Icons**: Feather Icons
- **Backend Automation**: n8n (workflow orchestration)
- **AI Model**: Google Gemini Chat Model
- **Data Storage**: Google Sheets
- **Authentication**: Email/Password with Google OAuth options
- **Additional Libraries**:
  - Vanta.js (animated background effects)
  - Font Awesome (icons)

## 📱 Pages Overview

### Main Pages
- **prompt.html** - Hero section with prompt input and example cards
- **prompt2.html** - Dashboard version with additional features
- **output.html** - Displays the polished prompt with copy/download options
- **login.html** - Authentication (login/signup) with password strength meter
- **about.html** - Project mission and team information
- **contact.html** - Contact form for user feedback
- **howItWorks.html** - Step-by-step guide
- **promptlibrary.html** - Collection of pre-polished prompts

### Features on Each Page
- **Responsive Navigation**: Links to all pages, dark mode toggle
- **Footer**: Social media links, quick access to important pages
- **Authentication Flow**: Login redirects to prompt2.html, signup stores in Google Sheets

## 🔐 Authentication

The app uses a basic email/password system:
- Passwords are sent via webhook to n8n
- Data stored in Google Sheets for persistence
- Password confirmation validation on signup
- Real-time password strength indicator

## 🎨 Customization

### Color Scheme
Edit the Tailwind config in HTML files:
```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',    // Indigo
        secondary: '#8b5cf6',  // Purple
      }
    }
  }
}
```

### Font Family
Currently using **Poppins** from Google Fonts. To change, update the `<link>` tag in HTML heads.

### Webhook URLs
Update n8n endpoints in JavaScript files:
```javascript
const N8N_WEBHOOK_URL = "http://localhost:5678/webhook-test/prompt";
```

## 🚀 Deployment

### Netlify / Vercel
1. Push code to GitHub
2. Connect repository to Netlify/Vercel
3. Update webhook URLs to point to production n8n instance
4. Set environment variables if needed

### Self-Hosted
1. Set up a web server (Nginx, Apache)
2. Deploy n8n on same or separate server
3. Update webhook URLs in JavaScript
4. Configure CORS headers appropriately

## 🔗 API Integration

### n8n Workflow Integration
The `backend.json` file contains the complete n8n workflow with these main nodes:
- **Webhook triggers** for each action
- **Google Gemini LLM** for prompt refinement
- **Google Sheets** integration for data persistence
- **Information Extractor** for parsing contact data

### Key Endpoints
| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/webhook-test/prompt` | GET | Refine a single prompt |
| `/webhook-test/prompt-polish` | POST | Alternative prompt refinement |
| `/webhook-test/login` | POST | User login |
| `/webhook-test/signup` | POST | User registration |
| `/webhook-test/contact` | POST | Contact form submission |

## 📝 Form Validation

- **Email**: Standard email format validation
- **Password**: 
  - Minimum 6 characters
  - Strength meter shows: Weak, Medium, Strong
  - Confirmation match required
- **Prompt**: Cannot be empty before refinement
- **Contact**: All fields required

## 🌙 Dark Mode

Dark mode preference is stored in browser's `localStorage`:
```javascript
localStorage.getItem("theme") // Returns "dark" or "light"
```

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Known Issues

- n8n webhook endpoint must be accessible from frontend (no CORS restrictions)
- Google Sheets integration requires OAuth setup with valid credentials
- Password strength meter is visual only (no backend enforcement)

## 🔜 Future Enhancements

- [ ] User accounts dashboard
- [ ] Prompt history and favorites
- [ ] Advanced refinement options (tone, style, length)
- [ ] API access for developers
- [ ] Prompt templates by category
- [ ] Rating system for refined prompts
- [ ] Export to multiple formats (JSON, PDF)
- [ ] Multi-language support

## 📄 License

This project is part of the promptAI repository.

## 👥 Contributors

- **Lead Developer**: Barr-ack

## 📧 Contact

For questions, feedback, or contributions, please use the contact form on the app or open an issue on GitHub.

## 🙏 Acknowledgments

- Built with love for better AI interactions
- Powered by Google Gemini and n8n
- Designed with Tailwind CSS
- Icons by Feather Icons and Font Awesome

---

**Made with ❤️ to make AI more accessible through better communication.**
