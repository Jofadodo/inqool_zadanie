
    
    <button onclick="topFunction()" id="topButton" title="Go to top">
        <img src="img/up-arrow.png" alt="Go to top">
    </button>

    <section class="input-form" id="form">
        <form class="input-form__wrapper" action="shared/addToPortfolio.php" method="POST">
            <label for="header" class="input-form__wrapper__label">Project name</label>
            <input type="text" id="header" name="header" required class="input-form__wrapper__input">
            <label for="description" class="input-form__wrapper__label">Description</label>
            <textarea type="text" id="description" name="description" required class="input-form__wrapper__input" rows="6"></textarea>
            <label for="date" class="input-form__wrapper__label">Date</label>
            <input type="date" id="date" name="date" required value="<?php echo date('Y-m-d') ?>" class="input-form__wrapper__input">
            <div>
                <input type="submit" value="Save" class="input-form__wrapper__input--button">
                <input type="button" value='Close' onclick="toggleForm(), enableScroll()" class="input-form__wrapper__input--button">
            </div>
        </form>
    </section>
    
    <footer class="footer">
        <div class="footer__links">
            <p>Projekt pre Inqool</p>
            <p>Jozef Fašanga</p>
            <a href="https://www.facebook.com/jozef.fasanga.5">Facebook
                <img src="img/facebook.png" alt="" class="footer__links__image">
            </a>
            <a href="https://www.instagram.com/jozeffasanga/">Instagram
                <img src="img/instagram.png" alt="" class="footer__links__image">
            </a>
        </div>
        <button onclick="toggleForm(), disableScroll()" title="Add new project" class="footer__button">Add project</button>
    </footer>

</body>
</html>
