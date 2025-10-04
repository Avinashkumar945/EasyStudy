# EasyStudy - Smart EdTech Platform

🌐 **[LIVE DEMO](https://easystudy-66e7.onrender.com)** 🌐

**Quick Demo Access:**
- **Student:** alice@example.com | **Teacher:** davis@example.com

A comprehensive educational technology platform that enables seamless learning experiences for both students and teachers with real-time collaboration features.

## 🚀 Features

### For Students
- **Interactive Dashboard** - Personalized learning experience with progress tracking
- **Quiz System** - Take quizzes and track performance with real-time scoring
- **Study Rooms** - Create and join collaborative study sessions
- **Video Learning** - Access recorded lectures and educational content
- **Notes Access** - Download and view study materials
- **AI Chat Assistant** - 24/7 AI-powered learning support
- **Leaderboard** - Compete with peers and track rankings

### For Teachers
- **Teacher Dashboard** - Comprehensive management interface
- **Quiz Creation** - Create, manage, and monitor quizzes with detailed analytics
- **Content Upload** - Upload videos and notes for students
- **Live Lectures** - Conduct real-time online classes
- **Study Room Management** - Create and moderate study sessions
- **Student Progress Tracking** - Monitor individual and class performance
- **Analytics & Reports** - Detailed insights into student engagement

### Study Room Features
- **Real-time Video Conferencing** - WebRTC-powered video/audio communication
- **Screen Sharing** - Share screens for collaborative learning
- **Live Chat** - Text messaging during study sessions
- **Cross-role Collaboration** - Students can create rooms, teachers can join to help
- **Participant Management** - Control who can join and participate

## 🛠️ Technology Stack

### Frontend
- **HTML5** - Modern semantic markup
- **CSS3 & Tailwind CSS** - Responsive and modern UI design
- **JavaScript (ES6+)** - Interactive functionality
- **Bootstrap** - UI components for study room interface

### Backend
- **Node.js** - Server-side JavaScript runtime
- **Express.js** - Web application framework
- **Socket.io** - Real-time bidirectional communication
- **Multer** - File upload handling

### Real-time Features
- **WebRTC** - Peer-to-peer video/audio communication
- **Socket.io** - Real-time messaging and signaling

## 📁 Project Structure

```
EasyStudy/
├── backend/
│   ├── server.js              # Main server file
│   ├── package.json           # Backend dependencies
│   ├── cloud_videos/          # Uploaded video storage
│   └── cloud_notes/           # Uploaded notes storage
├── dashboard.html             # Student dashboard
├── TeacherDash.html          # Teacher dashboard
├── study-room.html           # Collaborative study room interface
├── index.html                # Login/landing page
├── quiz.html                 # Quiz taking interface
├── quiz-creator.html         # Quiz creation interface
├── video-upload.html         # Video upload interface
├── notes-upload.html         # Notes upload interface
└── README.md                 # Project documentation
```

## 🚀 Getting Started

### Live Demo
🌐 **Access the live application:** [https://easystudy-66e7.onrender.com](https://easystudy-66e7.onrender.com)

### Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Avinashkumar945/EasyStudy.git
   cd EasyStudy
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Configure environment**
   - Edit `config.js` and set `environment: 'development'` for local testing
   - Set `environment: 'production'` for deployment

4. **Start the server**
   ```bash
   node server.js
   ```

5. **Access the application**
   - **Live Demo:** Navigate to `https://easystudy-66e7.onrender.com`
   - **Local Development:** Navigate to `http://localhost:3000`
   - Use the login credentials below to test different user roles

### Deployment

The application is deployed on **Render** with the following configuration:
- **Backend URL:** `https://easystudy-66e7.onrender.com`
- **Build Command:** `cd backend && npm install`
- **Start Command:** `cd backend && node server.js`
- **Environment:** Node.js
- **Auto-Deploy:** Enabled from GitHub repository

## 👥 Demo Accounts

### Students
- **Alice Johnson**: `alice@example.com` (Mathematics, Grade 10)
- **Bob Williams**: `bob@example.com` (Physics, Grade 11)
- **Charlie Brown**: `charlie@example.com` (Mathematics, Grade 10)

### Teachers
- **Mr. Davis**: `davis@example.com` (Mathematics, Lead Instructor)
- **Ms. Smith**: `smith@example.com` (Physics, Senior Teacher)

## 🎯 Key Functionalities

### Study Room Workflow
1. **Create Room** - Students or teachers can create study rooms
2. **Join Room** - Anyone can join active study rooms
3. **Collaborate** - Use video, audio, chat, and screen sharing
4. **Cross-role Support** - Teachers can join student-created rooms to provide guidance

### Quiz System
1. **Create Quiz** - Teachers design quizzes with multiple-choice questions
2. **Take Quiz** - Students access and complete available quizzes
3. **Real-time Scoring** - Instant feedback and performance tracking
4. **Analytics** - Detailed performance insights for teachers

### Content Management
1. **Upload Content** - Teachers upload videos and notes
2. **Access Materials** - Students view and download educational content
3. **Live Lectures** - Real-time online teaching sessions

## 🔧 API Endpoints

### Authentication
- `POST /api/login` - User authentication

### Quiz Management
- `GET /api/quizzes` - Get available quizzes for students
- `POST /api/quizzes` - Create new quiz (teachers)
- `POST /api/quizzes/submit` - Submit quiz answers

### Study Rooms
- `GET /api/study-rooms` - Get active study rooms
- `POST /api/study-rooms/create` - Create new study room
- `POST /api/study-rooms/:id/join` - Join existing room

### Content
- `POST /api/videos/upload` - Upload video content
- `POST /api/notes/upload` - Upload notes/documents
- `GET /api/videos` - Get available videos
- `GET /api/notes` - Get available notes

## 🌟 Unique Features

1. **Cross-role Study Rooms** - Students can create study rooms and teachers can join to provide help
2. **Real-time Collaboration** - WebRTC-powered video conferencing with screen sharing
3. **AI Learning Assistant** - Built-in chatbot for student support
4. **Comprehensive Analytics** - Detailed performance tracking and leaderboards
5. **Responsive Design** - Works seamlessly across desktop and mobile devices

## 🔒 Security Features

- Input validation and sanitization
- Secure file upload handling
- Role-based access control
- CORS protection

## 🚀 Future Enhancements

- [ ] Mobile app development
- [ ] Advanced AI tutoring features
- [ ] Integration with external learning management systems
- [ ] Advanced analytics and reporting
- [ ] Multi-language support
- [ ] Offline mode capabilities

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**Avinash Kumar**
- GitHub: [@Avinashkumar945](https://github.com/Avinashkumar945)
- Project: [EasyStudy](https://github.com/Avinashkumar945/EasyStudy)

## 🙏 Acknowledgments

- Built with modern web technologies
- Inspired by the need for accessible online education
- Designed for seamless teacher-student collaboration

---

**EasyStudy** - Making education accessible, interactive, and engaging for everyone! 🎓✨