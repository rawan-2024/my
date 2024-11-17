<script>
    function showSection(sectionId) {
        // إخفاء جميع الأقسام
        const sections = document.querySelectorAll('.content-section');
        sections.forEach(section => {
            section.style.display = 'none';
        });

        // عرض القسم المطلوب فقط
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.style.display = 'block';
        }
    }

    // عرض القسم الأولي (home) عند تحميل الصفحة
    document.addEventListener('DOMContentLoaded', () => {
        showSection('home');
    });
</script>