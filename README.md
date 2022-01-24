# Fullstack JS developer challenge

## Running the code

This is the starting point for Fullstack JS technical interview. To get started:

1. Clone the repo on your local machine
2. Install dependencies `npm i`
3. Run the code `npm start` and it should available at `localhost:3000`

## The challange

### Filter schedule by date range

On its / page, the app lists DFDS sailing schedules for our ferries, currently you are able to filter that list by port and by name of the vessel. Your task is to implement an additional filter to be able to set a date range for which the schedules will be displayed.

### Add validation to vessel field

When you navigate to /schedule/add, you are presented with a form that allows you to add a sailing time to the schedules. For now, the vessel field is just a text field and you can write any name you want and the form will accept it. At the top of the file, where the add sailing time form is declared, you will find an enum named VesselName. Your task is to replace the text field for vessel name with a select name that is populated with values from the aforementioned enum. Additionally, it would be nice that the field would be required so that the user cannot just leave it empty.

### Replace current backend with your own nodejs backend

Write now data is fetched from and written to a SaaS backend. Your task here is to replace that backend with your own nodejs backend that would have an endpoint for fetching schedules and another for adding a new schedule to the existing one. Here you’re invited to do a very minimal solution - you can declare and store data in an in-memory variable and do not worry about adding validation for form submission.
