
        // فلترة المشاريع
        document.addEventListener('DOMContentLoaded', function() {
            const filterButtons = document.querySelectorAll('.filter-btn');
            const projectCards = document.querySelectorAll('.project-card');

            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // إزالة الفئة النشطة من جميع الأزرار
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    // إضافة الفئة النشطة للزر المضغوط
                    this.classList.add('active');

                    const filterValue = this.getAttribute('data-filter');

                    projectCards.forEach(card => {
                        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                            card.style.display = 'block';
                            card.style.animation = 'fadeInUp 0.6s ease';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                });
            });

            // تأثيرات الحركة عند التمرير
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

            // تطبيق التأثير على بطاقات المشاريع
            projectCards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                card.style.transition = `all 0.6s ease ${index * 0.1}s`;
                observer.observe(card);
            });

            // تأثير العد للإحصائيات
            const statNumbers = document.querySelectorAll('.stat-number');
            const statsObserver = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const target = entry.target;
                        const finalText = target.textContent;
                        const finalNumber = parseInt(finalText);
                        
                        if (!isNaN(finalNumber)) {
                            animateNumber(target, finalNumber, finalText);
                        }
                        statsObserver.unobserve(target);
                    }
                });
            }, observerOptions);

            statNumbers.forEach(stat => {
                statsObserver.observe(stat);
            });
        });

        function animateNumber(element, target, finalText) {
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    element.textContent = finalText;
                    clearInterval(timer);
                } else {
                    element.textContent = Math.floor(current) + (finalText.includes('%') ? '%' : '+');
                }
            }, 30);
        }
