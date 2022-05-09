Feature: Fleet-Admin signup related test cases

    All Signup related test cases developed in this feature file

    Background: fleet-admin signup page
        Given user navigates to Signup page

    @regression @negative @signup-negative
    Scenario Outline:  validating error message for invalid email on Sign-up page
        When user enter <invalid_email> on Email Address field
        Then user should get invalid email <error_message>

        Examples:
            | invalid_email            | error_message      |
            | errmail@log.com1         | Email is not valid |
            | errmail@mail#archive.com | Email is not valid |
            | errormail.def@mail       | Email is not valid |
            | errormail.def@mail..com  | Email is not valid |
            | errormail..def@mail.com  | Email is not valid |
            | .errormail@gmail.com     | Email is not valid |

    # @regression @negative
    # Scenario Outline: validating error message for registred email
    #     When user enter <registered_email> on Email Address field
    #     When User enter password in the password field
    #     When User enter operator name in the name field
    #     When User click on the start now button
    #     Then user should get <error_alert>
    #     Examples:
    #         | registered_email | error_alert             |
    #         | test1@gmail.com  | Email is already in use |

    # @regression @negative
    # Scenario: validating error message for valid email on Sign-up page
    #     When user enter valid email on Email Address field
    #     Then user should not get any error message


    # @regression @negative
    # Scenario Outline: validating error messages for password on Sign-up page
    #     When user enter password <invalid_password> on Password field
    #     Then user should get password error msg <password_err_msg>
    #     And color of password length error message should be in <pwd_length_color>
    #     And color of password alphabetics error message should be in <pwd_alpha_color>
    #     And color of password numbers error message should be in <pwd_numbers_color>
    #     And color of password special error message should be in <pwd_special_color>

    #     Examples:
    #         | invalid_password | password_err_msg                        | pwd_length_color | pwd_alpha_color | pwd_numbers_color | pwd_special_color |
    #         | abcd             | Password must be atleast 9 character    | red              | red             | red               | red               |
    #         | abcdE            | Password must be atleast 9 character    | red              | green           | red               | red               |
    #         | abcdefghi        | Password does not meet the requirements | green            | red             | red               | red               |
    #         | abcdXYz          | Password must be atleast 9 character    | red              | green           | red               | red               |
    #         | abcdefghiXYZ     | Password does not meet the requirements | green            | green           | red               | red               |
    #         | xyz9abc          | Password must be atleast 9 character    | red              | red             | green             | red               |
    #         | abcdefghiXYZ9    | Password does not meet the requirements | green            | green           | green             | red               |
    #         | abcdefghiXYZ@    | Password does not meet the requirements | green            | green           | red               | green             |



    # @regression @positive
    # Scenario: Operator sign up for Bussr
    #     When User enter email in the email field
    #     When User enter password in the password field
    #     When User enter operator name in the name field
    #     When User click on the start now button
    #     Then User should land in Country selection page
    #     When User selects given Country
    #     When User click on Proceed button
    #     Then User lands into over view page