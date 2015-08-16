 $(document).ready(function(){
            $('#range-slider').slider({
                range: true,
                min: 0,
                max: 20000,
                values: [0, 15000],
                slide: function( event, ui ) {
                    setPriceValues(ui.values[ 0 ], ui.values[ 1 ]);
                }
            });        
            function setPriceValues(min, max)
            {
                $('.price-controls .min-price').val(min);
                $('.price-controls .max-price').val(max);
            }
            setPriceValues($("#range-slider").slider("values",0), $("#range-slider").slider( "values",1));
        });