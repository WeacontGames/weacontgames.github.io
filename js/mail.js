const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your_email@gmail.com', // Buraya kendi e-posta adresinizi girin
        pass: 'your_password' // Buraya e-posta şifrenizi girin
    }
});

document.getElementById('email-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const newsletter = document.getElementById('newsletter').checked;
    const verificationCode = Math.floor(1000 + Math.random() * 9000); // 4 haneli rastgele doğrulama kodu

    const mailOptions = {
        from: 'your_email@gmail.com',
        to: email,
        subject: 'Doğrulama Kodu',
        text: `Doğrulama kodunuz: ${verificationCode}`
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.error('E-posta gönderimi sırasında bir hata oluştu:', error);
            alert('E-posta gönderimi sırasında bir hata oluştu.');
        } else {
            console.log('E-posta gönderildi: ' + info.response);
            alert(`Doğrulama kodu ${email} adresine gönderildi!`);

            // Kullanıcıdan doğrulama kodunu isteyebilir ve kodu doğrulayabilirsiniz
        }
    });
});
