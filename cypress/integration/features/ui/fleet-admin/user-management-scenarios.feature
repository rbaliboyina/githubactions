Feature: User management related test cases under fleet admin portal

    All user management related test cases developed in this feature file

    Background: fleet-admin login page
        Given user navigates to login page
        Given user enter Email in email field
        Given user enter Password in password field
        Given user click on Sign In button
        Then user should land in overview page

    @regression @positive
    Scenario: View User Administration
        Given user should able to view User Administration

    @regression @positive
    Scenario: Validate Add New User button
        Given user click on User Management
        And user click on Add New User button in User Management page
        Then user should land in User Management page

    @regression @positive
    Scenario: View elements in Add New User Page
        Given user click on User Management
        And user click on Add New User button in User Management page
        Then user is able to view Add New User Form
        And user is able to view User Role dropdown field in Add New User form
        And user is able to view Full Name input field in Add New User form
        And user is able to view Email Address input field in Add New User form
        And user is able to view Auth Password input field in Add New User form
        And user is able to view Phone input field in Add New User form
        And user is able to view License No input field in Add New User form
        And user is able to view License Expire field in Add New User form
        And user is able to view Status with Active and Inactive buttons in Add New User form
        And user is able to view Cancel and Add User buttons in Add New User form

    # @regression @positive
    # Scenario: Validate close button in Add New User page
    #     Given user click on User Management
    #     And user click on Add New User button in User Management page
    #     Then user is able to view Add New User Form
    #     And user click on Cancel button in Add New User Form
    #     Then user should land in User Management page

    # @regression @positive
    # Scenario Outline: Validate Add User button - with valid data
    #     Given user click on User Management
    #     And user click on Add New User button in User Management page
    #     Then user is able to view Add New User Form
    #     When user fill the New User Form with random data and User_Role as <user_role> <Status>
    #     And user click on Add User button in Add New User Form
    #     Then user should land in User Management page
    #     Examples:
    #         | user_role   | Status |
    #         | Fleet Admin | Active |
    #         | Driver      | Active |

    # @regression @positive
    # Scenario: view elements in the user info page
    #     Given user click on User Management
    #     And user click on first element of the user in User Management page
    #     Then user info popup should open in the user Management page
    #     And user should able to view Edit button in User Info popup
    #     And user able to view Create On, Last Updated on, Phone, License No, Email, License Expire fields in User Info popup

    # @regression @positive
    # Scenario: Validate Edit button in User Info page
    #     Given user click on User Management
    #     And user click on first element of the user in User Management page
    #     Then user info popup should open in the user Management page
    #     And user click on Edit button in User Info popup
    #     And user should able to view Update button
    #     And user should able to view Edit popup window

    # @regression @positive
    # Scenario: Validate close button in User Info page
    #     Given user click on User Management
    #     And user click on first element of the user in User Management page
    #     Then user info popup should open in the user Management page
    #     When user click on close button in User Info popup in User Management page
    #     Then user info popup should close in User Management page


