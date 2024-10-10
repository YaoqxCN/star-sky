const numStars = 400; // 星星数量
const body = document.body;

for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    const size = Math.random() * 3 + 1; // 星星大小
    const x = (Math.random() * 2 - 1) * window.innerWidth; // 随机位置
    const y = (Math.random() * 2 - 1) * window.innerHeight;

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;

    body.appendChild(star);

    // 随机动画时长
    star.style.animationDuration = `${Math.random() * 1 + 0.5}s, ${Math.random() * 20 + 10}s`; // 设置随机时长，移动时间增大
    star.style.animationDelay = `${Math.random() * 2}s`;
}