type MenuOptions = ''| 'all' |'dog'|'cat'|'fish';

export const createMenuObject = (activeMenu: MenuOptions) => {
    let returnObject = {
        all:false,
        dog:false,
        cat:false,
        fish:false,
    };

    //Se for diferente de vazio,ou seja se clicou em alguma opção retorna o active como true
    if(activeMenu !== ''){
        returnObject[activeMenu] = true;
    }

    return returnObject
}