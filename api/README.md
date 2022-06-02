# PORTFOLIO NodeJS Web App
v1.0 Jun 2022

## Required Setup
```
* Node 16+
* Lambda Node.js 16.x - zip Package
```

## Before Use
```
Note: Before start, check the values of Twitter tokens on index.js
1) Create a Lambda on your favorite region {zemoga}
2) npm install
3) zip -r function.zip .
4) aws lambda update-function-code --function-name {zemoga} --zip-file fileb://function.zip
5) Create a Table (zemoga) on DynamoDB on the same region and add permissions to Lambda could can access.
```

## Use
```
* To put data and store on Dynamo use:

PUT → https://cjtoygwvjhc25kn2uylaxax52i0ivqmz.lambda-url.us-east-2.on.aws/

{
    "id": 1,
    "image": "imageurl",
    "title": "name",
    "description": "personal description"
}

GET → https://cjtoygwvjhc25kn2uylaxax52i0ivqmz.lambda-url.us-east-2.on.aws/

Response:

{
    "results": {
        "Items": [
            {
                "id": 1,
                "image": "imageurl",
                "title": "name",
                "description": "personal description"
            }
        ],
        "Count": 1,
        "ScannedCount": 1
    },
    "twitter":"[{\"created_at\":\"Sun Nov 08 23:12:45 +0000 2020\",\"id\":1325577024992382978,\"id_str\":\"1325577024992382978\",\"text\":\"this is my test from Java\",\"truncated\":false,\"entities\":{\"hashtags\":[],\"symbols\":[],\"user_mentions\":[],\"urls\":[]},\"source\":\"\<a href=\\\"http:\/\/portfolio-test.com\\\" rel=\\\"nofollow\\\"\>backend-portfolio-test\<\/a\>\",\"in_reply_to_status_id\":null,\"in_reply_to_status_id_str\":null,\"in_reply_to_user_id\":null,\"in_reply_to_user_id_str\":null,\"in_reply_to_screen_name\":null,\"user\":{\"id\":1220032047516921859,\"id_str\":\"1220032047516921859\",\"name\":\"Wilsonnn\",\"screen_name\":\"backend_test\",\"location\":\"San Francisco CA\",\"description\":\"\",\"url\":null,\"entities\":{\"description\":{\"urls\":[]}},\"protected\":true,\"followers_count\":0,\"friends_count\":0,\"listed_count\":0,\"created_at\":\"Wed Jan 22 17:15:04 +0000 2020\",\"favourites_count\":0,\"utc_offset\":null,\"time_zone\":null,\"geo_enabled\":false,\"verified\":false,\"statuses_count\":2,\"lang\":null,\"contributors_enabled\":false,\"is_translator\":false,\"is_translation_enabled\":false,\"profile_background_color\":\"F5F8FA\",\"profile_background_image_url\":null,\"profile_background_image_url_https\":null,\"profile_background_tile\":false,\"profile_image_url\":\"http:\/\/abs.twimg.com\/sticky\/default_profile_images\/default_profile_normal.png\",\"profile_image_url_https\":\"https:\/\/abs.twimg.com\/sticky\/default_profile_images\/default_profile_normal.png\",\"profile_link_color\":\"1DA1F2\",\"profile_sidebar_border_color\":\"C0DEED\",\"profile_sidebar_fill_color\":\"DDEEF6\",\"profile_text_color\":\"333333\",\"profile_use_background_image\":true,\"has_extended_profile\":false,\"default_profile\":true,\"default_profile_image\":true,\"following\":false,\"follow_request_sent\":false,\"notifications\":false,\"translator_type\":\"none\",\"withheld_in_countries\":[]},\"geo\":null,\"coordinates\":null,\"place\":null,\"contributors\":null,\"is_quote_status\":false,\"retweet_count\":0,\"favorite_count\":0,\"favorited\":false,\"retweeted\":false,\"lang\":\"en\"},{\"created_at\":\"Sun Nov 08 23:01:35 +0000 2020\",\"id\":1325574215504982018,\"id_str\":\"1325574215504982018\",\"text\":\"this is my message RPMC\",\"truncated\":false,\"entities\":{\"hashtags\":[],\"symbols\":[],\"user_mentions\":[],\"urls\":[]},\"source\":\"\<a href=\\\"http:\/\/portfolio-test.com\\\" rel=\\\"nofollow\\\"\>backend-portfolio-test\<\/a\>\",\"in_reply_to_status_id\":null,\"in_reply_to_status_id_str\":null,\"in_reply_to_user_id\":null,\"in_reply_to_user_id_str\":null,\"in_reply_to_screen_name\":null,\"user\":{\"id\":1220032047516921859,\"id_str\":\"1220032047516921859\",\"name\":\"Wilsonnn\",\"screen_name\":\"backend_test\",\"location\":\"San Francisco CA\",\"description\":\"\",\"url\":null,\"entities\":{\"description\":{\"urls\":[]}},\"protected\":true,\"followers_count\":0,\"friends_count\":0,\"listed_count\":0,\"created_at\":\"Wed Jan 22 17:15:04 +0000 2020\",\"favourites_count\":0,\"utc_offset\":null,\"time_zone\":null,\"geo_enabled\":false,\"verified\":false,\"statuses_count\":2,\"lang\":null,\"contributors_enabled\":false,\"is_translator\":false,\"is_translation_enabled\":false,\"profile_background_color\":\"F5F8FA\",\"profile_background_image_url\":null,\"profile_background_image_url_https\":null,\"profile_background_tile\":false,\"profile_image_url\":\"http:\/\/abs.twimg.com\/sticky\/default_profile_images\/default_profile_normal.png\",\"profile_image_url_https\":\"https:\/\/abs.twimg.com\/sticky\/default_profile_images\/default_profile_normal.png\",\"profile_link_color\":\"1DA1F2\",\"profile_sidebar_border_color\":\"C0DEED\",\"profile_sidebar_fill_color\":\"DDEEF6\",\"profile_text_color\":\"333333\",\"profile_use_background_image\":true,\"has_extended_profile\":false,\"default_profile\":true,\"default_profile_image\":true,\"following\":false,\"follow_request_sent\":false,\"notifications\":false,\"translator_type\":\"none\",\"withheld_in_countries\":[]},\"geo\":null,\"coordinates\":null,\"place\":null,\"contributors\":null,\"is_quote_status\":false,\"retweet_count\":0,\"favorite_count\":0,\"favorited\":false,\"retweeted\":false,\"lang\":\"en\"}]"
}
```