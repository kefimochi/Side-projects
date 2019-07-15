# Practicing Markdown

## Spacing in Markdown 
In order to become a paragraph element, markdown needs a whole line inbetween the content. For example, here's a list:

One

Two

Three

Four

And here's a list that would look like a list when editing, but in reality it will be all in one line:
One
Two
Three
Four

-----

## Styling in Markdown
### Italics, bold, strike-through

Here's some *italics* selection, here's some **bold**. There's also a way to use underscores instead of stars, so here's some _italics_ and __bold__ again. You can also select the text with your mouse and click star/underscore multiple times and instead of changing the text, it will wrap those elements around.

Here's a ~~strike~~ through!

### Checkout my GitHub profile link! <https://github.com/Kefimochi>
### And here's linked [text](https://github.com/Kefimochi "Hover over the link to see me! :з")

-----

## Linking multiple items w/ same link

I'm going to select all [text][text-link] on the page. Every time the word [text][text-link] shows up, there will be a link added in order to demonstarte how to reuse the same link w/ minimum amount of effort! Hope this [text][text-link] helps.

[text-link]: https://github.com/Kefimochi

![Alternate text that will show up to search engines, and screen reader users](https://github.com/kefimochi/Side-projects/blob/master/BJHu2X_n.jpg?raw=true "Show text when hovering")

### Nested image, click to open a bigger version in a new tab!

[![](https://pbs.twimg.com/profile_images/1150092126396411904/Wu16I4I2_400x400.jpg)](https://github.com/kefimochi/Side-projects/blob/master/BJHu2X_n.jpg?raw=true)

# We can also add some HTML & CSS to Markdown in order to get more control as editors!

<img class="img" src="https://pbs.twimg.com/profile_images/1150092126396411904/Wu16I4I2_400x400.jpg" height="200" width="200" alt="Text for a screenreader">

<style>
    .img {
        width: 100px;
        height: 100px;
    }
</style>

-----

## Creating an unordered and ordered lists

Just press a tab to go to the next level of a list.

* milk
  * fresh
  * whole
* eggs
* butter

1. You think you need to put numbers
   1. Here's some more text

        This is a paragraph nested instead the `list`!

        ```js
        // Here's some JS
        let x = 69;
        ```

   2. And again! 
2. in correct order in order for it to work.
3. But you're wrong, you can as well just put a
4. bunch of ones!

-----

## Block quotes!

> Here's some quote said by someone
> 
> And a second line for it <3
>
> - **Kate Efimova**

-----

## Showing the difference in code!

As you can see, by adding `-` you can show which line of code to delete, and by adding `+` you can show what to add.

```diff
var x = 100;
- var y = 200;
+ var y = 400;
```

-----

## Tables!

Centrally alligned, aligned to the right.

| Dog's Name | Dog's Age |
| :--------: | --------: |
|  Snickers  |         2 |
|  Prudence  |         8 |

Aligned to the left, centrally alligned

| Dog's Name | Dog's Age |
| :--------- | :-------: |
| Snickers   |     2     |
| Prudence   |     8     |

-----

## Checkboxes

* [x] Get Milk
* [ ] Crack Eggs
* [x] Cook Bacon