/*login*/
        function handleLogin(event) {
            event.preventDefault();
            
            // محاكاة عملية تسجيل الدخول
            const username = event.target.querySelector('input[type="text"]').value;
            const password = event.target.querySelector('input[type="password"]').value;
            
            if (username && password) {
                alert('تم تسجيل الدخول بنجاح!');
                // توجيه إلى الصفحة الرئيسية
                window.location.href = 'index.html';
            } else {
                alert('يرجى ملء جميع الحقول');
            }
        }
        
        // تأثير الحركة عند التحميل
        document.addEventListener('DOMContentLoaded', function() {
            const card = document.querySelector('.login-card');
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.8s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        });

