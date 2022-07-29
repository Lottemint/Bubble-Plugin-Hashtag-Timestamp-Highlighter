function(instance, properties) {

    let height = properties.bubble.height;
    let width = properties.bubble.width;

    let image = '//dd7tel2830j4w.cloudfront.net/f1594368884556x243691362795899650/marker.png';

    if (height > width) {
        height = width
    } else if (width > height) {

        width = height
    }

    instance.canvas.append(`<div style="position: fixed; top: calc(50% - ${(height / 2).toFixed(0)}px); left: calc(50% - ${(width / 2).toFixed(0)}px); height: ${height}px; width: ${width}px; background-size: cover; background-position: center; background-image: url(${image})"></div>`)
}