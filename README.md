# PLP Task Manager - React Frontend Application

A comprehensive React application built with Vite, featuring component architecture, state management, hooks usage, and API integration. This project demonstrates modern React development practices with Tailwind CSS for styling and responsive design.

## 🚀 Features

### ✅ Task Management
- **Add new tasks** with real-time input validation
- **Mark tasks as completed** with visual feedback
- **Delete tasks** with confirmation
- **Filter tasks** (All, Active, Completed)
- **Persistent storage** using localStorage
- **Task statistics** showing remaining tasks

### ✅ API Integration
- **Fetch data** from JSONPlaceholder API
- **Display posts** in responsive grid layout
- **Search functionality** to filter posts by title/body
- **Pagination** with Previous/Next controls
- **Loading states** and error handling
- **Real-time search** with instant filtering

### ✅ Theme System
- **Dark/Light mode toggle** with persistent preference
- **Global theme context** using React Context API
- **Smooth transitions** between themes
- **System color scheme** integration

### ✅ Responsive Design
- **Mobile-first approach** with Tailwind CSS
- **Responsive grid layouts** for all screen sizes
- **Interactive animations** and hover effects
- **Accessible components** with proper focus states

## 🛠️ Tech Stack

- **React 19.1.1** - Modern React with hooks
- **Vite 7.1.7** - Fast build tool and dev server
- **Tailwind CSS 4.1.15** - Utility-first CSS framework
- **React Router DOM 7.9.4** - Client-side routing
- **PropTypes** - Runtime type checking

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Button.jsx       # Multi-variant button component
│   ├── Card.jsx         # Content display component
│   ├── Footer.jsx       # Site footer
│   ├── Layout.jsx       # Main layout wrapper
│   ├── Navbar.jsx       # Navigation with theme toggle
│   └── TaskManager.jsx  # Task management component
├── context/             # React Context providers
│   └── ThemeContext.jsx # Theme management context
├── pages/               # Route components
│   ├── About.jsx        # About page
│   ├── Home.jsx         # Home page with API integration
│   ├── Tasks.jsx        # Tasks page
│   └── ApiDemo.jsx      # Standalone API demo
├── App.jsx              # Main app component with routing
├── main.jsx             # Application entry point
├── index.css            # Global styles and Tailwind imports
└── App.css              # Custom animations and styles
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-js-jsx-and-css-mastering-front-end-development-Paul-Siameto
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## 🎯 Usage Guide

### Navigation
- **Home** (`/`) - Welcome page with API integration demo
- **Tasks** (`/tasks`) - Task management interface
- **About** (`/about`) - Information about the application

### Task Management
1. Navigate to the **Tasks** page
2. **Add tasks** by typing in the input field and clicking "Add Task"
3. **Mark tasks complete** by checking the checkbox
4. **Filter tasks** using the All/Active/Completed buttons
5. **Delete tasks** using the red Delete button

### API Integration
1. Visit the **Home** page to see the API integration
2. **Search posts** using the search bar
3. **Navigate pages** using Previous/Next buttons
4. **View post details** in the responsive card layout

### Theme Toggle
- Click the **🌙 Dark Mode** / **☀️ Light Mode** button in the navbar
- Theme preference is automatically saved and restored

## 🔧 Component Architecture

### Button Component
```jsx
<Button variant="primary" size="md" onClick={handleClick}>
  Click me
</Button>
```
- **Variants**: primary, secondary, danger, success, warning
- **Sizes**: sm, md, lg
- **Features**: disabled state, custom styling, accessibility

### TaskManager Component
- **Custom hook**: `useLocalStorageTasks` for data persistence
- **State management**: useState for form inputs and filters
- **Effects**: useEffect for localStorage synchronization
- **Features**: CRUD operations, filtering, statistics

### Theme Context
```jsx
const { theme, toggleTheme } = useTheme();
```
- **Global state**: Theme preference across the app
- **Persistence**: localStorage integration
- **DOM manipulation**: Automatic class management

## 🎨 Styling & Design

### Tailwind CSS Configuration
- **Dark mode**: Class-based strategy (`darkMode: 'class'`)
- **Responsive design**: Mobile-first approach
- **Custom animations**: Fade-in effects and hover transitions
- **Color system**: Consistent light/dark theme colors

### Responsive Breakpoints
- **Mobile**: Default styles
- **Tablet**: `md:` prefix (768px+)
- **Desktop**: `lg:` prefix (1024px+)

### Animation System
- **Hover effects**: Scale transforms on interactive elements
- **Transitions**: Smooth color and transform changes
- **Loading states**: Visual feedback for async operations

## 🔍 State Management

### React Hooks Used
- **useState**: Component state management
- **useEffect**: Side effects and lifecycle management
- **useContext**: Theme management across components
- **Custom hooks**: LocalStorage integration for tasks

### Data Flow
1. **Theme Context** → Global theme state
2. **TaskManager** → Local task state with persistence
3. **API Integration** → Server state with loading/error handling
4. **Component Props** → Reusable component configuration

## 🌐 API Integration

### JSONPlaceholder Integration
- **Endpoint**: `https://jsonplaceholder.typicode.com/posts`
- **Features**: Fetch, search, pagination
- **Error handling**: Network errors and loading states
- **Performance**: Efficient filtering and pagination

### Search Implementation
- **Real-time filtering**: Instant search results
- **Case-insensitive**: Search in titles and body content
- **Pagination reset**: Automatic page reset on new search

## 🚀 Deployment

### Production Build
```bash
npm run build
```
This creates an optimized production build in the `dist/` directory.

### Deployment Options
- **Vercel**: Connect GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist/` folder
- **GitHub Pages**: Use GitHub Actions for automated deployment

## 🧪 Testing

### Manual Testing Checklist
- [ ] Task CRUD operations work correctly
- [ ] Theme toggle switches between light/dark modes
- [ ] API integration loads and displays data
- [ ] Search functionality filters results
- [ ] Pagination navigates through pages
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] Dark mode persists across page refreshes

## 🐛 Troubleshooting

### Common Issues

**Theme toggle not working:**
- Check browser console for errors
- Ensure Tailwind CSS is properly imported
- Verify `darkMode: 'class'` in tailwind.config.js

**API data not loading:**
- Check network connectivity
- Verify JSONPlaceholder API is accessible
- Check browser console for fetch errors

**Tasks not persisting:**
- Ensure localStorage is enabled in browser
- Check for JavaScript errors in console
- Verify custom hook implementation

## 📝 Development Notes

### Code Quality
- **ESLint**: Configured for React best practices
- **PropTypes**: Runtime type checking for components
- **Clean code**: Consistent naming and structure
- **Comments**: JSDoc comments for complex functions

### Performance Optimizations
- **Efficient re-renders**: Proper dependency arrays in useEffect
- **Memoization**: Strategic use of React.memo where needed
- **Bundle optimization**: Vite's built-in optimizations
- **Lazy loading**: Route-based code splitting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is part of the PLP (Power Learn Project) curriculum and is for educational purposes.

## 👨‍💻 Author

**Paul Siameto** - PLP Full Stack Development Program

---

## 🎓 Learning Objectives Achieved

This project demonstrates mastery of:

- ✅ **React Component Architecture** - Reusable, composable components
- ✅ **State Management** - useState, useEffect, useContext hooks
- ✅ **API Integration** - Fetch, error handling, loading states
- ✅ **Responsive Design** - Mobile-first Tailwind CSS
- ✅ **Theme Management** - Dark/light mode with Context API
- ✅ **Custom Hooks** - LocalStorage persistence
- ✅ **Routing** - React Router for navigation
- ✅ **Modern Tooling** - Vite, ESLint, modern React patterns

Built with ❤️ using React and Tailwind CSS