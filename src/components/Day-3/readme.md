# Rotating Navigation

## height with transition

> height 设置为 auto，transition 不起作用
> 所以设置 height，我们需要知道具体高度，如果我们不知道具体的高度呢？

max-height
```css
article {
    max-width: 800px;
    max-height: 300px;
    overflow-y: hidden;

    /* 增加过渡时间以适应高度 */
    transition: max-height 0.7s linear;
}

article.expanded {
    max-height: 1500px;
}
```