import React, { useState } from 'react';
import EmailForm from './components/EmailForm';
import X from './components/X';

const App = () => {
  // Email bilgisini tutacak state'i tanımla
  const [submittedEmail, setSubmittedEmail] = React.useState('');

  // Form tarafından çağrılacak callback fonksiyonunu oluştur
  const handleEmailSubmit = (email) => {
    // Email bilgisini state'e kaydet
    setSubmittedEmail(email);
  };

  return (
    <div>
      <EmailForm onEmailSubmit={handleEmailSubmit} />
      <X submittedEmail={submittedEmail} />
    </div>
  );
};

export default App;
