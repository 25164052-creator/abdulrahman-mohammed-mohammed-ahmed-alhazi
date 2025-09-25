/*contact*/
        // معالجة إرسال النموذج
        function handleSubmit(event) {
            event.preventDefault();
            
            // جمع بيانات النموذج
            const formData = new FormData(event.target);
            const firstName = event.target.querySelector('input[type="text"]').value;
            const email = event.target.querySelector('input[type="email"]').value;
            
            // محاكاة إرسال الرسالة
            if (firstName && email) {
                alert('تم إرسال رسالتك بنجاح! سأتواصل معك قريباً.');
                event.target.reset();
            } else {
                alert('يرجى ملء جميع الحقول المطلوبة');
            }
        }

        // تأثيرات الحركة عند التمرير
        document.addEventListener('DOMContentLoaded', function() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);

            // تطبيق التأثير على العناصر
            const animatedElements = document.querySelectorAll('.contact-item, .social-card, .contact-form, .contact-info');
            animatedElements.forEach((element, index) => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(30px)';
                element.style.transition = `all 0.6s ease ${index * 0.1}s`;
                observer.observe(element);
            });

            // تأثير التركيز على حقول النموذج
            const formInputs = document.querySelectorAll('.form-input, .form-textarea');
            formInputs.forEach(input => {
                input.addEventListener('focus', function() {
                    this.parentElement.style.transform = 'scale(1.02)';
                });
                
                input.addEventListener('blur', function() {
                    this.parentElement.style.transform = 'scale(1)';
                });
            });
        });
