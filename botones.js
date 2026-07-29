    function toggleSkill(button) {
        const skillItem = button.parentElement;
        const skillContent = skillItem.querySelector('.skill-content');
        const skillToggle = button.querySelector('.skill-toggle');
        
        skillContent.classList.toggle('active');
        skillToggle.textContent = skillContent.classList.contains('active') ? '−' : '+';
    }