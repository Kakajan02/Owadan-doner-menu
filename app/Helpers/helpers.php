<?php

if (!function_exists('price_format')) {
    function price_format($number)
    {
        if ($number % 100 != 0) {
            $number /= 100;
            return number_format($number, 2, '.', '');
        }

        return number_format($number / 100, 2, '.', '');
    }
}


if (!function_exists('current_langs')) {
    function current_langs(){
        $langs = [];
        foreach (LaravelLocalization::getSupportedLocales() as $key => $value ){
            $langs[] = $key;
        }
           
        return $langs;
    }
}
