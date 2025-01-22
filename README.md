# Кастомный элемент: Табы

Интерактивная вкладка позволяет пользователям переключаться между различными блоками контента с помощью кнопок.

---

## Установка

### HTML
Добавьте следующий HTML-код в нужное место вашей страницы:

```html
<div class="container" id="about">
  <div class="info">
    <div class="info__header">
      <div class="info__header-tab">Кнопка 1</div>
      <div class="info__header-tab">Кнопка 2</div>
      <div class="info__header-tab">Кнопка 3</div>
      <div class="info__header-tab">Кнопка 4</div>
    </div>
    <div class="info__tabcontent fade">
      <!-- Контент первой вкладки -->
    </div>
    <div class="info__tabcontent fade">
      <!-- Контент второй вкладки -->
    </div>
    <div class="info__tabcontent fade">
      <!-- Контент третьей вкладки -->
    </div>
    <div class="info__tabcontent fade">
      <!-- Контент четвертой вкладки -->
    </div>
  </div>
</div>
```
### JavaScript

Добавьте в ваш скрипт код из файла `main.js`, где:

- **`infoTab`** — контейнер для кнопок.
- **`tabElements`** — все кнопки для переключения слайдов.
- **`tabContentElements`** — все вкладки с контентом.

---

## CSS

Не добавляйте классы скрытия неактивных вкладок вручную в верстку. Вместо этого:

1. Добавьте классы `.show` и `.hide` из файла `style.css` в ваш CSS файл.
2. Для анимации переключения слайдов при необходимости используйте класс `.fade` из файла `style.css`.

```css
/* Пример CSS */
.show {
  display: flex;
}

.hide {
  display: none;
}

.fade {
	animation-name: fade;
	animation-duration: 2.5s;
}
@keyframes fade {
	from {
		opacity: 0.1;
	}
	to {
		opacity: 1;
	}
}
```
