<template>
  <div class="profile">
    <!-- プロフィールヘッダー -->
    <header class="profile__header">
      <h1 class="profile__name">{{ name }}</h1>
      <p class="profile__title">{{ title }}</p>
    </header>

    <!-- プロフィールメイン -->
    <main class="profile__main">
      <img :src="profileImage" :alt="name" class="profile__image">
      
      <section class="profile__info">
        <h2 class="profile__section-title">趣味</h2>
        
        <div class="profile__hobbies">
          <!-- 音ゲー -->
          <section class="hobby-section">
            <h3 class="hobby-title">音ゲー</h3>
            <ul class="hobby-list">
              <li>CHUNITHM 旧17.00</li>
              <li>SOUND VOLTEX インペリアル</li>
            </ul>
          </section>

          <!-- 数学 -->
          <section class="hobby-section">
            <h3 class="hobby-title">数学</h3>
            <ul class="hobby-list">
              <li>グラフ理論</li>
              <li>論理学</li>
              <li>計算量理論</li>
              <li>近似アルゴリズム</li>
            </ul>
          </section>

          <!-- プログラミング -->
          <section class="hobby-section">
            <h3 class="hobby-title">プログラミング</h3>
            <ul class="hobby-list">
              <li>C++</li>
              <li>Rust</li>
              <li>Python</li>
              <li>Scala</li>
              <li>Go(やりたい)</li>
              <li>Haskell(やりたい)</li>
            </ul>
          </section>

          <!-- 競技プログラミング -->
          <section class="hobby-section">
            <h3 class="hobby-title">競技プログラミング</h3>
            <ul class="hobby-list">
              <li>AtCoder最高黄</li>
              <li>ICPC国内本選出場</li>
            </ul>
          </section>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import profile from '@/assets/profile.jpg'

const name = ref('冬月十夜')
const title = ref('パソコンと数学が好きなけもみみ幼女')
const profileImage = ref(profile)
</script>

<style scoped>
.profile {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f8f9fa;
  min-height: 100vh;
}

.profile__header {
  text-align: center;
  margin-bottom: 4rem;
  padding: 2rem;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  border-radius: 16px;
  color: white;
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.2);
}

.profile__name {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.profile__title {
  font-size: 1.3rem;
  opacity: 0.9;
}

.profile__main {
  display: grid;
  grid-template-columns: minmax(250px, 300px) 1fr;
  gap: 3rem;
}

.profile__image {
  width: 100%;
  aspect-ratio: 1;
  border-radius: 20px;
  object-fit: cover;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.profile__image:hover {
  transform: scale(1.02);
}

.profile__info {
  background-color: white;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
}

.profile__section-title {
  font-size: 2rem;
  margin-bottom: 2.5rem;
  padding-bottom: 0.8rem;
  border-bottom: 3px solid #6366f1;
  color: #2d3748;
}

.profile__hobbies {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.hobby-section {
  background-color: #ffffff;
  padding: 1.8rem;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}

.hobby-section:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-color: #6366f1;
}

.hobby-title {
  font-size: 1.4rem;
  margin-bottom: 1.2rem;
  color: #4a5568;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.hobby-title::before {
  content: "◆";
  color: #6366f1;
  font-size: 0.8em;
}

.hobby-list {
  list-style-type: none;
  padding-left: 0.5rem;
}

.hobby-list li {
  margin-bottom: 0.8rem;
  position: relative;
  padding-left: 1.2rem;
  color: #4a5568;
}

.hobby-list li::before {
  content: "•";
  color: #6366f1;
  position: absolute;
  left: 0;
  font-weight: bold;
}

@media (max-width: 768px) {
  .profile__main {
    grid-template-columns: 1fr;
  }
  
  .profile__header {
    margin-bottom: 2rem;
    padding: 1.5rem;
  }
  
  .profile__name {
    font-size: 2.5rem;
  }
  
  .profile__hobbies {
    grid-template-columns: 1fr;
  }
}
</style> 