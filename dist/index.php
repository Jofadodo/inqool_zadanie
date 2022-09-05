<?php 
    include 'shared/header.php';
    include 'shared/databaseData.php';
?>

<main>

    <section class="css-slider-wrapper" id="images">
        <input type="radio" name="slider" class="slide-radio1" checked id="slider_1">
        <input type="radio" name="slider" class="slide-radio2" id="slider_2">
        <input type="radio" name="slider" class="slide-radio3" id="slider_3">
        <input type="radio" name="slider" class="slide-radio4" id="slider_4">

        <div class="slider-pagination">
            <label for="slider_1" class="page1"></label>
            <label for="slider_2" class="page2"></label>
            <label for="slider_3" class="page3"></label>
            <label for="slider_4" class="page4"></label>
        </div>

        <div class="slider slide-1">
            <img src="img/slider/slide-1.jpg" alt="">
        </div>
        <div class="slider slide-2">
            <img src="img/slider/slide-2.jpg" alt="">
        </div>
        <div class="slider slide-3">
            <img src="img/slider/slide-3.jpg" alt="">
        </div>
        <div class="slider slide-4">
            <img src="img/slider/slide-4.jpg" alt="">
        </div>  
    </section>
    
    <section class="portfolio" id="portfolio">
        <?php

            $sql = "SELECT * FROM portfolio ORDER BY date desc";
            $data = getDataFromDatabase($sql);

            echo "<ul class='portfolio__block'>";
            foreach ($data as $tab) {
                echo "<li class='portfolio__block__box'>";
                    echo "<a href=''>";
                        echo "<h2>" . $tab["header"] . "</h2>";
                        echo "<p class='portfolio__block__box--description'>" . $tab["description"] . "</p>";
                        echo "<p class='portfolio__block__box--date'>" . date_format(date_create($tab["date"]), "d.m.Y") . "</p>";
                    echo "</a>";
                echo "</li>";
            }
            echo "</ul>";

        ?>
    </section>

    <div class="portfolio__scroll-buttons">
        <button class="portfolio__scroll-buttons--left" id="scrollLeft" type="button" onclick="scrollToLeft()"><img src="img/scroll-arrow.png" alt=""></button>
        <button class="portfolio__scroll-buttons--right" id="scrollRight" type="button" onclick="scrollToRight()"><img src="img/scroll-arrow.png" alt=""></button>
    </div>

    <section class="randomText">
        <h2>Lorem ipsum</h2>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit natus deserunt iusto et doloremque facere vitae qui deleniti eaque? Eius hic, dolores in iusto corrupti quidem molestiae voluptate? Quo, aliquid!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos officiis eum maiores accusamus nesciunt veritatis mollitia culpa! Ipsum necessitatibus rerum aspernatur tempore dolor pariatur autem iusto, consectetur sed architecto similique!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, itaque? Quam dolore similique quo quibusdam magnam velit iusto minus explicabo veniam repudiandae nostrum rerum, blanditiis quasi nisi omnis accusamus. Voluptatibus.
    </section>

    <section class="randomText--flex">
        <h2>Lorem ipsum</h2>
        <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab rem sed, possimus exercitationem repellendus dolorem quis similique beatae praesentium doloribus mollitia a neque, accusantium optio aut dolorum. Quis, eos quaerat.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt voluptatibus ad consequuntur nihil molestias sapiente animi reiciendis maiores vitae, ipsa accusantium est placeat culpa laudantium eaque tenetur magni quidem ab.
        </div>
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus placeat aut architecto! Aliquid eaque inventore ducimus doloremque neque voluptate sequi laborum accusantium perferendis? At facere, accusantium autem dolores magni accusamus!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio iusto velit quae reprehenderit, iste repellendus sapiente corrupti illum nostrum excepturi architecto similique quam voluptas voluptates nam blanditiis officiis reiciendis nisi!
        </div>
    </section>

    <section class="randomText">
        <h2>Lorem ipsum</h2>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt eligendi iusto rerum, nesciunt esse illum expedita magni, voluptatum dolorum est doloribus minus cumque reprehenderit harum. Distinctio molestiae eveniet perspiciatis illo.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium totam sapiente consequuntur explicabo possimus perferendis qui id, sequi maxime labore maiores magni porro quisquam quia dicta corporis. Deserunt, tenetur suscipit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem repudiandae impedit veniam ad distinctio, earum fugit saepe omnis voluptate at numquam, expedita iste provident nam aut nostrum. Quisquam, error illum?
    </section>
    
        
    <section class="skills" id="skills">
        <?php

            $sql = "SELECT id, skill FROM skills";
            $data = getDataFromDatabase($sql);

            echo "<ul class='skills__block'>";
            foreach ($data as $skill) {
                echo "<li class='skills__block__box' onclick='getSkillDescription(event, \"".$skill["id"]."\")'>";
                    echo $skill["skill"];
                echo "</li>";
            }
            echo "</ul>";

        ?>

        <div class="skills__description">
        </div>
    </section>
                
                
                
</main>

<?php include 'shared/footer.php' ?>