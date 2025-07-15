// src/app/dashboard/profile/page.tsx
'use client';

import { useState, useEffect } from 'react';

interface UserProfile {
  username: string;
  email: string;
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fungsi untuk mengambil data profil pengguna
    async function fetchProfile() {
      const res = await fetch('/api/user/profile'); // Memanggil API Route
      const data = await res.json();
      setProfile(data);
      setLoading(false);
    }

    fetchProfile();
  }, []); // [] berarti useEffect hanya berjalan sekali saat komponen dimuat

  if (loading) {
    return <div>Loading profile...</div>;
  }

  if (!profile) {
    return <div>Failed to load profile.</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Profil Pengguna</h1>
      <p>Username: {profile.username}</p>
      <p>Email: {profile.email}</p>
    </div>
  );
}
