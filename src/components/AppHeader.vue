<template>
  <header class="app-header">
    <nav class="nav-container">
      <div class="logo">冬月十夜</div>
      <div class="nav-links">
        <RouterLink to="/" class="nav-link">
          <i class="fas fa-home"></i>
          <span>Home</span>
        </RouterLink>
        <RouterLink to="/profile" class="nav-link">
          <i class="fas fa-user"></i>
          <span>Profile</span>
        </RouterLink>
      </div>
    </nav>
  </header>
</template>

<script lang="js" setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.app-header {
  background-color: white;
  padding: 0.8rem 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 600;
  color: #3b82f6;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: #64748b;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.nav-link:hover {
  color: #3b82f6;
  background-color: #f1f5f9;
}

.nav-link.router-link-active {
  color: #3b82f6;
  background-color: #eff6ff;
}

.nav-link i {
  font-size: 1.1rem;
}
</style> 