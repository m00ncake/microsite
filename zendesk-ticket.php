
<? php
// Request via PHP cURL

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://callfire.zendesk.com/api/v2/tickets.json",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "{\n  \"ticket\": {\n\t\"description\": \"TEST with Postman\",\n    \"subject\":  \"TEST from Marketing 3\",\n    \"comment\":  { \"body\": \"assignee id added\" },\n    \"priority\": \"urgent\",\n    \"group_id\": 20679931,\n    \"assignee_id\": 639621598\n  }\n}",
  CURLOPT_HTTPHEADER => array(
    "Authorization: Basic am1vb25AY2FsbGZpcmUuY29tL3Rva2VuOm84dmNCYnV1SUhveTNvVTZ4ZFpibkVWVHJkcnEwWDVTOG9rOWZDMUs=",
    "Content-Type: application/json"
  ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}

?>

<? php
// Postman json
{
  "ticket": {
	"description": "TEST with Postman",
    "subject":  "TEST from Marketing 3",
    "comment":  { "body": "assignee id added" },
    "priority": "urgent",
    "group_id": 20679931,
    "assignee_id": 639621598
  }
}

?>


<? php
// Basic Auth
"Authorization: Basic am1vb25AY2FsbGZpcmUuY29tL3Rva2VuOm84dmNCYnV1SUhveTNvVTZ4ZFpibkVWVHJkcnEwWDVTOG9rOWZDMUs=" // jmoon@callfire.com
"Authorization: Basic bWFya2V0aW5nQGNhbGxmaXJlLmNvbS90b2tlbjpvOHZjQmJ1dUlIb3kzb1U2eGRaYm5FVlRyZHJxMFg1UzhvazlmQzFL" // marketing@callfire.com
?>



<? php
// Workflow -> Rules -> json to zendesk -> Execute custom PHP code

$url = 'https://callfire.zendesk.com/api/v2/tickets.json';
$firstname = $data['components']['first_name']['value'][0];
$lastname = $data['components']['last_name']['value'][0];
$fullname = $firstname . " " . $lastname;
$email = $data['components']['email']['value'][0];
$phone = $data['components']['phone']['value'][0];
$message = $data['components']['ask_us_something']['value'][0];
$var = array(
   'ticket' => array(
       'description' => $data['components']['first_name']['value'][0],
       'subject' =>  $fullname,
       'comment' => array(
           'body' => $message . "\n" . $fullname . "\n" . $email . "\n" . $phone
       ),
       'priority' => 'urgent',
       'group_id' => '20679931',
       'assignee_id' => '639621598'
   )
);

$options = array(
    'method' => 'POST',
    'data' => json_encode($var),
    'timeout' => 15,
    'headers' => array(
        'Content-Type' => 'application/json',
        'Authorization' => 'Basic bWFya2V0aW5nQGNhbGxmaXJlLmNvbS90b2tlbjpvOHZjQmJ1dUlIb3kzb1U2eGRaYm5FVlRyZHJxMFg1UzhvazlmQzFL'
    )
);

$response = drupal_http_request($url, $options);

if ( $response->code == 200 ) {
  return true;
}

?>