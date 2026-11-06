// تنبيه عام للتأكد من عمل الـ JavaScript
console.log("نظام إدارة مشاريع التخرج يعمل بنجاح!");

// 1. التحقق من صفحة تسجيل الدخول (index.html)
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector("#login-form"); // تأكد أن الـ form لديه هذا الـ id إذا أردت
    
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            const email = document.querySelector("#email").value;
            const password = document.querySelector("#password").value;

            if (email === "" || password === "") {
                alert("الرجاء إدخال البريد الإلكتروني وكلمة المرور!");
                event.preventDefault(); // منع إرسال النموذج لو الحقول فارغة
            }
        });
    }

    // 2. التحقق من صفحة إضافة مشروع (add-project.html)
    const projectForm = document.querySelector("#project-form");
    
    if (projectForm) {
        projectForm.addEventListener("submit", function(event) {
            const projectName = document.querySelector("#project-name").value;
            
            if (projectName.trim() === "") {
                alert("الرجاء إدخال عنوان المشروع على الأقل!");
                event.preventDefault();
            } else {
                alert("تم إضافة المقترح بنجاح!");
            }
        });
    }
});
