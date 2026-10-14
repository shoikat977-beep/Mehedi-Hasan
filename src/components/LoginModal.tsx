import React, { useState } from 'react';
import { X, User, Lock, Mail, Check } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const LoginModal: React.FC = () => {
  const { isLoginOpen, setIsLoginOpen, user, setUser, showToast } = useStore();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('shoikat977@gmail.com');
  const [name, setName] = useState('Shoikat');
  const [password, setPassword] = useState('••••••••');

  if (!isLoginOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUser({
      name: name || 'Shoikat',
      email: email
    });
    setIsLoginOpen(false);
    showToast(`Welcome back, ${name || 'Shoikat'}!`);
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoginOpen(false);
    showToast('Signed out of Avansi account');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-sm w-full overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-[#5a9e32]" />
            <h3 className="text-sm font-bold text-slate-900 font-['Outfit',sans-serif]">
              {user ? 'My Avansi Account' : isSignUp ? 'Create New Account' : 'Customer Sign In'}
            </h3>
          </div>
          <button
            onClick={() => setIsLoginOpen(false)}
            className="p-1 text-slate-400 hover:text-slate-700 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {user ? (
          <div className="p-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#5a9e32]/10 text-[#5a9e32] flex items-center justify-center mx-auto text-xl font-bold">
              {user.name.charAt(0)}
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">{user.name}</h4>
              <p className="text-xs text-slate-500">{user.email}</p>
            </div>
            <div className="bg-slate-50 rounded p-3 text-xs text-left text-slate-600 space-y-1">
              <p className="flex items-center gap-1.5 text-emerald-700 font-medium">
                <Check className="w-3.5 h-3.5" /> Avansi VIP Member
              </p>
              <p>• 5% Cashback on electronics orders</p>
              <p>• Priority 24/7 dedicated support</p>
            </div>
            <button
              onClick={handleLogout}
              className="w-full border border-rose-300 text-rose-600 hover:bg-rose-50 py-2 rounded text-xs font-semibold transition-colors"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {isSignUp && (
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Your Name</label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded focus:border-[#5a9e32] focus:outline-hidden"
                    placeholder="Shoikat"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded focus:border-[#5a9e32] focus:outline-hidden"
                  placeholder="shoikat977@gmail.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded focus:border-[#5a9e32] focus:outline-hidden"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#5a9e32] hover:bg-[#4b8429] text-white py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer mt-2"
            >
              {isSignUp ? 'Create Account' : 'Sign In'}
            </button>

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-xs text-slate-500 hover:text-[#5a9e32] transition-colors"
              >
                {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
