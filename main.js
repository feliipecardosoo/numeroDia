const data = new Date ('04-03-2023');
const diaSemana = data.getDay();

function formatacaoTexto (diaSemana){
    let diaEscrito

    switch (diaSemana){
        case 0:
            diaEscrito = 'Domingo';
            return diaEscrito;
            case 1:
                diaEscrito = 'Segunda-Feira';
                return diaEscrito;
                case 2:
                    diaEscrito = 'Terça-Feira';
                    return diaEscrito;
                    case 3:
                        diaEscrito = 'Quarta-Feira';
                        return diaEscrito;
                        case 4:
                            diaEscrito = 'Quinta-Feira';
                            return diaEscrito;
                            case 5:
                                diaEscrito = 'Sexta-Feira';
                                return diaEscrito;
                                case 6:
                                    diaEscrito = 'Sabado';
                                    return diaEscrito;
                                                            
                        
    }
}

console.log(formatacaoTexto(diaSemana));