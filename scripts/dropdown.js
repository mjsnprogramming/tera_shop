    const drop_dresses = document.querySelector('#dresses_button');
    const drop_shirts = document.querySelector('#shirts_button');
    const drop_pants = document.querySelector('#pants_button');
    const drop_content_dresses = document.querySelector('#dresses');
    const drop_content_shirts = document.querySelector('#shirts');
    const drop_content_pants = document.querySelector('#pants');

//dropdown dresses
    drop_dresses.addEventListener('mouseover',  () => {

            drop_content_dresses.style.visibility = 'visible';
            drop_content_dresses.style.display = 'block';
            drop_content_dresses.style.transform = 'skew(35deg)';

        });


    drop_dresses.addEventListener('mouseout',  () => {

        drop_content_dresses.style.visibility = 'hidden';
    });

  //dropdown shirts

    drop_shirts.addEventListener('mouseover',  () => {

        drop_content_shirts.style.visibility = 'visible';
        drop_content_shirts.style.transform = 'skew(35deg)';

    });


    drop_shirts.addEventListener('mouseout',  () => {

        drop_content_shirts.style.visibility = 'hidden';
    });

    //dropdown pants
    drop_pants.addEventListener('mouseover',  () => {

        drop_content_pants.style.visibility = 'visible';
        drop_content_pants.style.transform = 'skew(35deg)';

    });


    drop_pants.addEventListener('mouseout',  () => {

        drop_content_pants.style.visibility = 'hidden';
    });










