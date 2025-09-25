
        // تحريك أشرطة التقدم عند التمرير
        document.addEventListener('DOMContentLoaded', function() {
            const observerOptions = {
                threshold: 0.5,
                rootMargin: '0px 0px -100px 0px'
            };

            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const progressBars = entry.target.querySelectorAll('.skill-progress');
                        progressBars.forEach(bar => {
                            const width = bar.getAttribute('data-width');
                            setTimeout(() => {
                                bar.style.width = width + '%';
                            }, 200);
                        });
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            // مراقبة جميع فئات المهارات
            const skillCategories = document.querySelectorAll('.skill-category');
            skillCategories.forEach(category => {
                observer.observe(category);
            });

            // تأثيرات الحركة للأدوات
            const toolItems = document.querySelectorAll('.tool-item');
            toolItems.forEach((item, index) => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                item.style.transition = `all 0.6s ease ${index * 0.1}s`;
                
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 500 + (index * 100));
            });
        });
  