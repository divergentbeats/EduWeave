import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Calendar, Users, Shield } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [usn, setUsn] = useState<string>('');
  const [dob, setDob] = useState<string>('');
  const [loginType, setLoginType] = useState('student'); // 'student' or 'admin'

  const handleLogin = () => {
    if (loginType === 'admin') {
      if (usn === 'admin' && dob === 'admin') {
        navigate('/admin-dashboard');
      } else {
        alert('Invalid admin credentials');
      }
    } else {
      const studentsData = localStorage.getItem('students');
      const students = studentsData ? JSON.parse(studentsData) : [];
      const student = students.find((s: any) => s.usn.toLowerCase() === usn.toLowerCase() && s.dob === dob);

      if (student) {
        localStorage.setItem('currentStudent', JSON.stringify(student));
        navigate('/dashboard');
      } else {
        localStorage.setItem('pendingStudent', JSON.stringify({ usn, dob }));
        navigate('/student-entry');
      }
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/30 dark:from-[#0D1117] dark:via-[#0D1117] dark:to-[#0D1117] flex items-center justify-center p-4 transition-colors">
      <motion.div initial={{opacity:0, scale:.9}} animate={{opacity:1, scale:1}} transition={{duration:1.2, delay:.2}}
        className="absolute top-0 left-0 w-full h-full bg-grid-slate-700/10 [mask-image:linear-gradient(0deg,transparent,black)]" />
      
      <div className="relative bg-white/50 dark:bg-[#12121b]/50 backdrop-blur-2xl text-gray-900 dark:text-indigo-100 p-8 rounded-2xl shadow-2xl w-full max-w-sm border border-white/20 dark:border-gray-800/50 transition-colors">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent mb-2">
            EduWeave
          </h1>
          <p className="text-gray-600 dark:text-gray-400">Sign in to your dashboard</p>
        </div>

        <div className="flex justify-center mb-6">
          <div className="bg-gray-200 dark:bg-gray-800/50 rounded-lg p-1 flex">
            <button onClick={() => setLoginType('student')} className={`px-4 py-2 text-sm font-semibold rounded-md flex items-center gap-2 transition-all ${loginType === 'student' ? 'bg-violet-600 text-white shadow-md' : 'text-gray-600 dark:text-gray-300'}`}>
              <Users size={16} /> Student
            </button>
            <button onClick={() => setLoginType('admin')} className={`px-4 py-2 text-sm font-semibold rounded-md flex items-center gap-2 transition-all ${loginType === 'admin' ? 'bg-violet-600 text-white shadow-md' : 'text-gray-600 dark:text-gray-300'}`}>
              <Shield size={16} /> Admin
            </button>
          </div>
        </div>

        <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: .5}} className="space-y-6">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">{loginType === 'student' ? 'USN' : 'Username'}</label>
            <input
              type="text"
              value={usn}
              onChange={(e) => setUsn(e.target.value)}
              className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200"
              placeholder={loginType === 'student' ? 'e.g., 1RVU22CSE001' : 'Enter admin username'}
            />
          </div>
          <div className='relative'>
            <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">{loginType === 'student' ? 'Date of Birth' : 'Password'}</label>
            <input
              type={loginType === 'student' ? 'date' : 'password'}
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className={`w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200 ${loginType === 'student' ? 'pr-10' : ''}`}
              placeholder='YYYY-MM-DD'
            />
            {loginType === 'student' && <Calendar className="absolute right-3 top-11 text-gray-400 pointer-events-none" size={20}/>}
          </div>
          <button
            onClick={handleLogin}
            className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            Login
          </button>
        </motion.div>

        <p className="text-center text-xs text-gray-500 mt-8">
          By logging in, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Login;
