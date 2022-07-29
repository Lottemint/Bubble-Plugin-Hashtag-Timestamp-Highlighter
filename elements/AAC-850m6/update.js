function(instance, properties, context) {


    if (instance.data.observer && typeof instance.data.observer.disconnect === 'function') {

        instance.data.observer.disconnect();

        delete instance.data.observer
    }

    if (instance.data.delimiter && instance.data.delimiter !== properties.delimiter && instance.data.class_name) {


        let elements = $(`.${instance.data.class_name}`);

        setTimeout(() => {


            elements.each((i, el) => {

                el.outerHTML = el.innerText
            })
        }, 0)
    }


    if (typeof instance.data.triggerMe === 'function' && properties.el_id && (typeof properties.el_id === 'string' && properties.el_id.trim() !== '')) instance.data.triggerMe(properties)

}