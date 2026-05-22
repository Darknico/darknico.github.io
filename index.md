---
permalink: /
layout: home
---
{% assign t = site.data[site.active_lang] %}
<h2>{{ t.home.welcome }}</h2>
<section class="container" style="margin-top:40px;">
  <h2 style="text-align:center;">{{ t.home.projects }}</h2>
  <div class="portfolio">
    <div class="project">
      <img src="/assets/img/project-item-git.png" alt="Anteprima GitHub" style="width:100%;max-width:220px;border-radius:6px;margin-bottom:12pxbox-shadow:0 2px 8px #0002;">
      <h3>GITHUB</h3>
      <p>{{ t.home.githubDescription }}</p>
      <a href="https://github.com/Darknico" target="_blank">{{ t.home.visit }}</a>
    </div>
    <div class="project">
      <img src="/assets/img/project-item-IS.png" alt="Anteprima Italian SMF" style="width:100%;max-width:220px;border-radius:6pxmargin-bottom:12px;box-shadow:0 2px 8px #0002;">
      <h3>ITALIAN SMF</h3>
      <p>{{ t.home.isDescription }}</p>
      <a href="https://www.italiansmf.net/" target="_blank">{{ t.home.visit }}</a>
    </div>
  </div>
</section>
