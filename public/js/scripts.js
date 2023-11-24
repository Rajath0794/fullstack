/*!
* Start Bootstrap - Clean Blog v6.0.9 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if (currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove('is-visible');
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
});

$(document).ready(() => {
     // Add a custom validation function
    function validateField(fieldId) {
        var fieldValue = $(fieldId).val().trim();
        if (fieldValue === '') {
            $(fieldId).addClass('is-invalid');
            return false;
        } else {
            $(fieldId).removeClass('is-invalid');
            return true;
        }
    }

    // Attach the common form validation function to the form submit event
    $('#fetchForm').submit(function(e) {
        var isValid = true;
        var fieldsWithErrors = [];

        if (!validateField('#license')) {
            isValid = false;
            fieldsWithErrors.push('license Number');
        }

        if (!isValid) {
            e.preventDefault(); // Prevent form submission if validation fails
            
            // Display error messages for all fields with errors
            $('#submitErrorMessage').html('Errors in the following fields: ' + fieldsWithErrors.join(', ')).removeClass('d-none');
        }
    })

    $('#contactForm').submit(function(e) {
        var isValid = true;
        var fieldsWithErrors = [];

        // Validate each field and store fields with errors
        if (!validateField('#fname')) {
            isValid = false;
            fieldsWithErrors.push('First Name');
        }
        if (!validateField('#lname')) {
            isValid = false;
            fieldsWithErrors.push('Last Name');
        }
        if (!validateField('#license')) {
            isValid = false;
            fieldsWithErrors.push('License Number');
        }
        if (!validateField('#age')) {
            isValid = false;
            fieldsWithErrors.push('Age');
        }
        if (!validateField('#dob')) {
            isValid = false;
            fieldsWithErrors.push('DOB');
        }
        if (!validateField('#make')) {
            isValid = false;
            fieldsWithErrors.push('Make');
        }
        if (!validateField('#model')) {
            isValid = false;
            fieldsWithErrors.push('Model');
        }
        if (!validateField('#year')) {
            isValid = false;
            fieldsWithErrors.push('Year');
        }
        if (!validateField('#pno')) {
            isValid = false;
            fieldsWithErrors.push('Plate Number');
        }

        if (!isValid) {
            e.preventDefault(); // Prevent form submission if validation fails
            
            // Display error messages for all fields with errors
            $('#submitErrorMessage').html('Errors in the following fields: ' + fieldsWithErrors.join(', ')).removeClass('d-none');
        }
    });

    // Configure the date picker for the DOB field
    $( "#dob" ).datepicker({ maxDate: "0D" });

});