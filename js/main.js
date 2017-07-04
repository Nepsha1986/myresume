$(document).ready(function () {
    'use strict';

    $(document).on('click', '.portfolio-link', function (e) {
        e.preventDefault();
        var clickedEl = $(this);
        var toggleIco =$(clickedEl).find('.fa');
        var infoBlock = $('.hero .info-block');
        var portfolioBlock = $('.hero .portfolio-block');

        $(clickedEl).toggleClass('active');
        triggerIco(toggleIco);
        changeInfo(toggleIco);

        function triggerIco(ico) {
            if($(ico).hasClass('fa-toggle-off')) {
                $(ico).removeClass('fa-toggle-off').addClass('fa-toggle-on');
            } else if ($(ico).hasClass('fa-toggle-on')) {
                $(ico).removeClass('fa-toggle-on').addClass('fa-toggle-off');
            }
        }

        function changeInfo(ico) {
            if($(ico).hasClass('fa-toggle-on')) {
                $(infoBlock).velocity({
                    translateZ: -1020,
                    translateX: -250,
                    rotateY: 37
                }, {
                    duration: 1000,
                    complete:function () {
                        $(portfolioBlock).velocity({
                            rotateY: -45
                        }, {
                            duration: 0
                        }).velocity('fadeIn');
                    }
                });
            } else if ($(ico).hasClass('fa-toggle-off')) {
                $(portfolioBlock).velocity('fadeOut', {
                    complete: function () {
                        $(infoBlock).velocity({
                            translateZ: 0,
                            translateX: 0,
                            rotateY: 0
                        }, {
                            duration: 400
                        })
                    }
                });
            }
        }
    });

    $(document).on('load', heroAnimation());

    function heroAnimation() {
        var clientWidth = $(window).width();

        if(clientWidth > 1100) {
            var heroBlock = $('section.hero');
            var text  = $(heroBlock).find('.info-block');
            var photo = $(heroBlock).find('.photo-frame');

            $(photo).velocity({
                translateZ: -100
            }, {
                duration: 0
            }).velocity({
                translateZ: 0
            }, {
                duration: 600,
                delay: 500,
                easing: 'easeInElastic',
                complete: function() {
                    amimateLineLong(photo.find('.line-top'),'width', 1);
                    amimateLineLong(photo.find('.line-bottom'),'width', 2);
                    amimateLineLong(photo.find('.line-left'),'height', 3);
                    amimateLineLong(photo.find('.line-right'),'height', 4);
                }
            }).velocity({
                translateX: 0,
                rotateX: -12,
                rotateY: 30,
                rotateZ: 0
            }, {
                delay: 0,
                duration: 1000
            }).velocity({
                translateX: 0,
                rotateX: 10,
                rotateY: 15,
                rotateZ: 0,
                complete: function () {
                    $(text).children().each(function(index, el) {
                        $(el).velocity('transition.bounceRightIn', {
                            delay: 500*index
                        });
                    });

                    $(photo).find('.animated-frame').velocity({
                        rotateZ: 7,
                        rotateX: 40,
                        rotateY: 16
                    }, {
                        loop: true,
                        duration: 5000
                    });
                }
            }, {
                delay: 0,
                duration: 10000,
                loop: true
            });
        }

        function amimateLineLong (el,dir, order) {
            if( dir == 'width') {
                $(el).velocity({
                    width: "120%"
                }, {
                    duration: 700,
                    delay: order*300
                });
            } else if (dir == 'height') {
                $(el).velocity({
                    height: "120%"
                }, {
                    duration: 400,
                    delay: order*300
                });
            } else {
                console.log ('Error in amimateLineLong() function, please insert valid param');
            }
        }
    }

    function skillsInit() {
        var skillBar = $('.resume-item.resume-item_skills');
        var skillProcess = $(skillBar).find('.skill-process');

        $(skillProcess).each(function (index, el) {
            var percentage = $(el).data('persentage');
            $(el).text(percentage + "%");

            $(el).css({
                width: percentage + '%'
            });
        });
    }

    skillsInit();
});