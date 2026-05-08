function ProfilePhoto({ src, alt = 'Profile photo' }) {
  return (
    <div className="hero-photo-card">
      <img className="hero-photo-image" src={src} alt={alt} />
    </div>
  );
}

export default ProfilePhoto;
