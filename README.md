# Routing_task

Давай попробуем сделать маршрутизацию в небольшом тестовом приложении с помощью инструментов React


### Release 0. Начало
Для начала инициализируем приложение:
```
npm i
```
- запуск стартового скрипта:
```
npm run dev
```
Убедись, что приложение работает, посмотри папку components - тут есть все нужные странички. Заранее подумай как будет выстроена карта приложения, после чего приступай к маршрутизации

Над стилями пока не думай, сделай так чобы у тебя был доступ к любому компоненту в приложении

### Release 1. Главный компонент
В главном компоненте приложения `App` добавь элементы <Routes> и <Route>, распредели их правильно, чтобы Navbar отображался на каждой странице. 
Сделай логичные ссылки на каждый компонент - например, чтобы компонент Home открывался по пути "/".
 
### Release 2. Ссылки и кнопки
Импортируй хук useNavigate из библиотки react-router-dom и используй его - создай в каждом компонете одну кнопку и одну ссылку ведущие на другие компоненты (для кнопок используй useNavigate, а для ссылок <Link>)

### Release 3. Навигационное меню
Теперь таким же образом "оживим" NavBar - напиши логику для каждой кнопки, а также добавь еще две - "вперед" и "назад". Проверь все ли работает?

### Выводы
В этом задании ты попрактиковался создавать маршруты в простых приложениях.
**В папке assets лежит текстовый файл с изначальным кодом, посмотри его только когда выполнишь все релизы. Сравни его со своим кодом - сильно ли они отличаются? 
Добиться желаемого результата в JS (как и большинстве языках программирования) можно множеством различных вариантов, но наиболее желаемым является лаконичный легкочитаемый код. 
