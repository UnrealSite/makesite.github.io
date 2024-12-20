const languages = {
    "en": "English",
    "ru": "Русский",
    "es": "Español",
    // Add more languages here
};

function detectLanguage() {
    const userLang = navigator.language || navigator.userLanguage;
    const langCode = userLang.substring(0, 2);
    if (languages[langCode]) {
        setLanguage(langCode);
    } else {
        fetch('https://ipapi.co/json/')
            .then(response => response.json())
            .then(data => {
                const countryCode = data.country_code.toLowerCase();
                if (languages[countryCode]) {
                    setLanguage(countryCode);
                } else {
                    setLanguage("en");
                }
            })
            .catch(() => setLanguage("en"));
    }
}

function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.getElementById('language-selector').value = lang;
    loadContent(lang);
}

function loadContent(lang) {
    const content = 
{
    "en": `
        <section id="home">
            <div class="container">
                <h1>Welcome to UnrealSite organization</h1>
                <p>This is a multilingual website with animations and enhanced security.</p>
            </div>
        </section>
        <section id="about">
            <div class="container">
                <h2>About Us</h2>
                <p>Here you will find detailed instructions on how to create a website and the benefits of learning web development.</p>
            </div>
        </section>
        <section id="instruction">
            <div class="container">
                <h2>Instructions for Creating Your Own Website</h2>
                <section id="step1">
                    <h3>Step 1: Define Purpose and Planning</h3>
                    <p>Before you start creating your website, it's important to understand why you need it and what tasks it will perform.</p>
                    <p>Examples of purposes:</p>
                    <ul>
                        <li>Personal blog for publishing articles.</li>
                        <li>Portfolio to showcase your work.</li>
                        <li>Online store to sell products.</li>
                    </ul>
                </section>
                <section id="step2">
                    <h3>Step 2: Choose a Domain Name and Register It</h3>
                    <p>A domain name is the address of your site on the internet (e.g., www.example.com).</p>
                    <p>Example steps for choosing a domain name:</p>
                    <ul>
                        <li>Choose a unique and memorable name.</li>
                        <li>Check domain availability using services such as GoDaddy or Namecheap.</li>
                        <li>Register the domain through the chosen service.</li>
                    </ul>
                </section>
                <section id="step3">
                    <h3>Step 3: Choose Hosting</h3>
                    <p>Hosting is where your site's files will be stored.</p>
                    <p>Examples of popular hosting providers:</p>
                    <ul>
                        <li>Bluehost</li>
                        <li>SiteGround</li>
                        <li>HostGator</li>
                    </ul>
                </section>
                <section id="step4">
                    <h3>Step 4: Install a Content Management System (CMS)</h3>
                    <p>CMS (Content Management System) allows you to easily manage your site's content.</p>
                    <p>Examples of popular CMS:</p>
                    <ul>
                        <li>WordPress (most popular and user-friendly for beginners)</li>
                        <li>Joomla</li>
                        <li>Drupal</li>
                    </ul>
                    <p>Instructions for installing WordPress:</p>
                    <ol>
                        <li>Log in to your hosting control panel.</li>
                        <li>Find the option to install WordPress.</li>
                        <li>Follow the on-screen instructions to complete the installation.</li>
                    </ol>
                </section>
                <section id="step5">
                    <h3>Step 5: Choose and Customize a Theme</h3>
                    <p>A theme determines the appearance of your site.</p>
                    <p>Example steps for choosing a theme in WordPress:</p>
                    <ol>
                        <li>Log in to the WordPress admin panel.</li>
                        <li>Go to the "Appearance" -> "Themes" section.</li>
                        <li>Choose and install a suitable theme from the catalog.</li>
                    </ol>
                </section>
`
}
{
    "en": `
                <section id="step6">
                    <h3>Step 6: Configure Plugins</h3>
                    <p>Plugins add functionality to your site.</p>
                    <p>Examples of useful plugins for WordPress:</p>
                    <ul>
                        <li>Yoast SEO - improves your site's SEO.</li>
                        <li>WooCommerce - turns your site into an online store.</li>
                        <li>Contact Form 7 - adds contact forms to your site.</li>
                    </ul>
                    <p>Instructions for installing plugins in WordPress:</p>
                    <ol>
                        <li>Log in to the WordPress admin panel.</li>
                        <li>Go to the "Plugins" -> "Add New" section.</li>
                        <li>Find the necessary plugin and click "Install".</li>
                    </ol>
                </section>
                <section id="step7">
                    <h3>Step 7: Create Content</h3>
                    <p>Now that your site is set up, it's time to create content.</p>
                    <p>Examples of content:</p>
                    <ul>
                        <li>Pages: "About Us", "Contact", "Services".</li>
                        <li>Posts (blog entries): articles, news, reviews.</li>
                    </ul>
                    <p>Instructions for creating a page in WordPress:</p>
                    <ol>
                        <li>Go to the "Pages" -> "Add New" section.</li>
                        <li>Enter the page title and add content.</li>
                        <li>Click "Publish".</li>
                    </ol>
                    <p>Instructions for creating a post in WordPress:</p>
                    <ol>
                        <li>Go to the "Posts" -> "Add New" section.</li>
                        <li>Enter the post title and content.</li>
                        <li>Click "Publish".</li>
                    </ol>
                </section>
                <section id="step8">
                    <h3>Step 8: Optimize the Site</h3>
                    <p>Optimization helps improve your site's performance and visibility.</p>
                    <p>Examples of optimization methods:</p>
                    <ul>
                        <li>SEO: Use the Yoast SEO plugin to optimize content.</li>
                        <li>Load speed: Use caching and optimize images.</li>
                        <li>Security: Install plugins to protect against hacks, such as Wordfence.</li>
                    </ul>
                </section>
                <section id="step9">
                    <h3>Step 9: Test and Launch</h3>
                    <p>Before launching your site, make sure everything works correctly.</p>
                    <p>Examples of testing:</p>
                    <ul>
                        <li>Check all links for functionality.</li>
                        <li>Test forms for correct data submission.</li>
                        <li>Check the site's display on different devices and browsers.</li>
                    </ul>
                    <p>After successful testing, you can announce the launch of your site and start promoting it!</p>
                </section>
                <section id="step10">
                    <h3>Step 10: Promote the Site</h3>
                    <p>After launching your site, it's important to attract visitors.</p>
                    <p>Promotion methods:</p>
                    <ul>
                        <li>SEO (Search Engine Optimization): Optimize content for search engines.</li>
                        <li>Social media: Post links to your site on social media.</li>
                        <li>Advertising: Use paid advertising on Google AdWords, Facebook Ads, and other platforms.</li>
                        <li>Content marketing: Create valuable and interesting content to attract an audience.</li>
                    </ul>
                </section>
                <section id="step11">
                    <h3>Step 11: Analyze and Improve</h3>
                    <p>Regularly analyze traffic and user behavior data.</p>
                    <p>Examples of analysis tools:</p>
                    <ul>
                        <li>Google Analytics: Track traffic and user behavior.</li>
                        <li>Search Console: Check indexing and the state of your site in Google's search engine.</li>
                        <li>Hotjar: Analyze heatmaps and user behavior on the site.</li>
                    </ul>
                </section>
                <section id="step12">
                    <h3>Step 12: Support and Update</h3>
                    <p>A successful site requires regular updates and support.</p>
                    <p>Site support tasks:</p>
                    <ul>
                        <li>Content updates: Regularly add new articles and update existing ones.</li>
                        <li>Plugin and theme updates: Keep track of new versions and install updates.</li>
                        <li>Security monitoring: Periodically conduct security checks and fix vulnerabilities.</li>
                    </ul>
                </section>
                <section id="conclusion">
                    <h2>Conclusion</h2>
                    <p>Creating and maintaining your own website is an ongoing process that requires attention and effort. However, the result is worth it: you will have a platform for self-expression, business, or hobbies that works for you 24/7.</p>
                    <p>Don't be afraid to experiment and try new approaches. Good luck with creating your website!</p>
                    <p>If you have any questions or need help at any stage, just let me know.</p>
                </section>
            </div>
        </section>
    `
}
{
    "es": `
        <section id="home">
            <div class="container">
                <h1>Bienvenido a UnrealSite organization</h1>
                <p>Este es un sitio web multilingüe con animaciones y seguridad mejorada.</p>
            </div>
        </section>
        <section id="about">
            <div class="container">
                <h2>Sobre Nosotros</h2>
                <p>Aquí encontrarás instrucciones detalladas sobre cómo crear un sitio web y los beneficios de aprender desarrollo web.</p>
            </div>
        </section>
        <section id="instruction">
            <div class="container">
                <h2>Instrucciones para Crear tu Propio Sitio Web</h2>
                <section id="step1">
                    <h3>Paso 1: Definir Propósito y Planificación</h3>
                    <p>Antes de comenzar a crear tu sitio web, es importante entender por qué lo necesitas y qué tareas realizará.</p>
                    <p>Ejemplos de propósitos:</p>
                    <ul>
                        <li>Blog personal para publicar artículos.</li>
                        <li>Portafolio para mostrar tu trabajo.</li>
                        <li>Tienda en línea para vender productos.</li>
                    </ul>
                </section>
                <section id="step2">
                    <h3>Paso 2: Elegir un Nombre de Dominio y Registrarlo</h3>
                    <p>Un nombre de dominio es la dirección de tu sitio en internet (por ejemplo, www.ejemplo.com).</p>
                    <p>Ejemplos de pasos para elegir un nombre de dominio:</p>
                    <ul>
                        <li>Elige un nombre único y memorable.</li>
                        <li>Verifica la disponibilidad del dominio usando servicios como GoDaddy o Namecheap.</li>
                        <li>Registra el dominio a través del servicio elegido.</li>
                    </ul>
                </section>
                <section id="step3">
                    <h3>Paso 3: Elegir Hosting</h3>
                    <p>El hosting es donde se almacenarán los archivos de tu sitio.</p>
                    <p>Ejemplos de proveedores de hosting populares:</p>
                    <ul>
                        <li>Bluehost</li>
                        <li>SiteGround</li>
                        <li>HostGator</li>
                    </ul>
                </section>
                <section id="step4">
                    <h3>Paso 4: Instalar un Sistema de Gestión de Contenidos (CMS)</h3>
                    <p>Un CMS (Content Management System) te permite gestionar fácilmente el contenido de tu sitio.</p>
                    <p>Ejemplos de CMS populares:</p>
                    <ul>
                        <li>WordPress (el más popular y fácil de usar para principiantes)</li>
                        <li>Joomla</li>
                        <li>Drupal</li>
                    </ul>
                    <p>Instrucciones para instalar WordPress:</p>
                    <ol>
                        <li>Inicia sesión en el panel de control de tu hosting.</li>
                        <li>Encuentra la opción para instalar WordPress.</li>
                        <li>Sigue las instrucciones en pantalla para completar la instalación.</li>
                    </ol>
                </section>
                <section id="step5">
                    <h3>Paso 5: Elegir y Personalizar un Tema</h3>
                    <p>Un tema determina la apariencia de tu sitio.</p>
                    <p>Ejemplo de pasos para elegir un tema en WordPress:</p>
                    <ol>
                        <li>Inicia sesión en el panel de administración de WordPress.</li>
                        <li>Ve a la sección "Apariencia" -> "Temas".</li>
                        <li>Elige e instala un tema adecuado del catálogo.</li>
                    </ol>
                </section>
{
    "es": `
                <section id="step6">
                    <h3>Paso 6: Configurar Plugins</h3>
                    <p>Los plugins añaden funcionalidad a tu sitio.</p>
                    <p>Ejemplos de plugins útiles para WordPress:</p>
                    <ul>
                        <li>Yoast SEO - mejora el SEO de tu sitio.</li>
                        <li>WooCommerce - convierte tu sitio en una tienda en línea.</li>
                        <li>Contact Form 7 - añade formularios de contacto a tu sitio.</li>
                    </ul>
                    <p>Instrucciones para instalar plugins en WordPress:</p>
                    <ol>
                        <li>Inicia sesión en el panel de administración de WordPress.</li>
                        <li>Ve a la sección "Plugins" -> "Añadir nuevo".</li>
                        <li>Encuentra el plugin necesario y haz clic en "Instalar".</li>
                    </ol>
                </section>
                <section id="step7">
                    <h3>Paso 7: Crear Contenido</h3>
                    <p>Ahora que tu sitio está configurado, es hora de crear contenido.</p>
                    <p>Ejemplos de contenido:</p>
                    <ul>
                        <li>Páginas: "Sobre Nosotros", "Contacto", "Servicios".</li>
                        <li>Entradas (blogs): artículos, noticias, reseñas.</li>
                    </ul>
                    <p>Instrucciones para crear una página en WordPress:</p>
                    <ol>
                        <li>Ve a la sección "Páginas" -> "Añadir nueva".</li>
                        <li>Introduce el título de la página y añade contenido.</li>
                        <li>Haz clic en "Publicar".</li>
                    </ol>
                    <p>Instrucciones para crear una entrada en WordPress:</p>
                    <ol>
                        <li>Ve a la sección "Entradas" -> "Añadir nueva".</li>
                        <li>Introduce el título de la entrada y el contenido.</li>
                        <li>Haz clic en "Publicar".</li>
                    </ol>
                </section>
                <section id="step8">
                    <h3>Paso 8: Optimización del Sitio</h3>
                    <p>La optimización ayuda a mejorar el rendimiento y la visibilidad de tu sitio.</p>
                    <p>Ejemplos de métodos de optimización:</p>
                    <ul>
                        <li>SEO: Utiliza el plugin Yoast SEO para optimizar el contenido.</li>
                        <li>Velocidad de carga: Utiliza caché y optimiza imágenes.</li>
                        <li>Seguridad: Instala plugins para proteger contra hacks, como Wordfence.</li>
                    </ul>
                </section>
                <section id="step9">
                    <h3>Paso 9: Pruebas y Lanzamiento</h3>
                    <p>Antes de lanzar tu sitio, asegúrate de que todo funcione correctamente.</p>
                    <p>Ejemplos de pruebas:</p>
                    <ul>
                        <li>Comprobar que todos los enlaces funcionan.</li>
                        <li>Probar los formularios para asegurar que envían datos correctamente.</li>
                        <li>Verificar la visualización del sitio en diferentes dispositivos y navegadores.</li>
                    </ul>
                    <p>Después de pruebas exitosas, puedes anunciar el lanzamiento de tu sitio y comenzar su promoción!</p>
                </section>
                <section id="step10">
                    <h3>Paso 10: Promoción del Sitio</h3>
                    <p>Después de lanzar tu sitio, es importante atraer visitantes.</p>
                    <p>Métodos de promoción:</p>
                    <ul>
                        <li>SEO (Search Engine Optimization): Optimiza el contenido para los motores de búsqueda.</li>
                        <li>Redes sociales: Publica enlaces a tu sitio en redes sociales.</li>
                        <li>Publicidad: Usa publicidad pagada en Google AdWords, Facebook Ads y otras plataformas.</li>
                        <li>Marketing de contenidos: Crea contenido valioso e interesante para atraer audiencia.</li>
                    </ul>
                </section>
{
    "es": `
                <section id="step11">
                    <h3>Paso 11: Análisis y Mejora</h3>
                    <p>Analiza regularmente los datos de tráfico y el comportamiento de los usuarios.</p>
                    <p>Ejemplos de herramientas de análisis:</p>
                    <ul>
                        <li>Google Analytics: Rastrea el tráfico y el comportamiento de los usuarios.</li>
                        <li>Search Console: Verifica la indexación y el estado de tu sitio en el motor de búsqueda de Google.</li>
                        <li>Hotjar: Analiza mapas de calor y el comportamiento de los usuarios en el sitio.</li>
                    </ul>
                </section>
                <section id="step12">
                    <h3>Paso 12: Mantenimiento y Actualización</h3>
                    <p>Un sitio exitoso requiere actualizaciones y mantenimiento regulares.</p>
                    <p>Tareas de mantenimiento del sitio:</p>
                    <ul>
                        <li>Actualización de contenido: Añade regularmente nuevos artículos y actualiza los existentes.</li>
                        <li>Actualización de plugins y temas: Mantente al tanto de las nuevas versiones e instálalas.</li>
                        <li>Monitoreo de seguridad: Realiza periódicamente verificaciones de seguridad y corrige las vulnerabilidades.</li>
                    </ul>
                </section>
                <section id="conclusion">
                    <h2>Conclusión</h2>
                    <p>Crear y mantener tu propio sitio web es un proceso continuo que requiere atención y esfuerzo. Sin embargo, el resultado vale la pena: tendrás una plataforma para expresarte, hacer negocios o disfrutar de tus hobbies, que funcionará para ti las 24 horas del día, los 7 días de la semana.</p>
                    <p>No temas experimentar y probar nuevos enfoques. ¡Buena suerte con la creación de tu sitio web!</p>
                    <p>Si tienes alguna pregunta o necesitas ayuda en cualquier etapa, házmelo saber.</p>
                </section>
            </div>
        </section>
    `
}
