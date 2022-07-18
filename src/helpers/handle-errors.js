import Vue from 'vue';
import Router from '@/router/index';

const showErrorAlert = (error, redirect) => {
    Vue.swal.fire({
        text: error,
        icon: 'error',
        confirmButtonColor: '#ff5a60',
        confirmButtonText: 'Cerrar'
    }).then(async () =>{
        if(redirect){
            await Router.push({name: 'SignUp'})
        }
    });
}

export const handleErrors = (code) => {

    let error = '';
    let redirect = false;

    switch (code) {
        case 'INVALID_PASSWORD_FORMAT':
            error = 'El formato de la contraseña no es válido.';
            break;
        case 'EMAIL_ADDRESS_ALREADY_REGISTERED':
            error = 'El email ya ha sido registrado previamente.';
            break;
        case 'BAD_REQUEST':
            error = 'La información enviada es incorrecta.';
            break;
        case 'UNEXPECTED_ERROR':
            error = 'Ocurrio un error inesperado, inténtelo más tarde.';
            break;
        case 'UNAUTHORIZED':
            error = 'No autorizado.';
            redirect = true;
            break;
        case 'INVALID_TOKEN':
            error = 'El código de verificación no es válido.';
            break;
        case 'TRADER_HAS_NOT_PHONE_NUMBER_YET':
            error = 'El usuario no tiene un número de teléfono asignado.';
            break;
        case 'PROFILE_IS_NOT_COMPLETED_YET':
            error = 'El perfil del usuario aún no ha sido completado.';
            break;
        default:
            error = 'Ocurrio un error inesperado, inténtelo más tarde.';
            break;
    }

    showErrorAlert(error, redirect);

}
