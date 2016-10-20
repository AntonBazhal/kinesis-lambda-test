# kinesis-lambda-test

Simple [Serverless](https://serverless.com/) service that connects to [AWS Kinesis Streams](https://aws.amazon.com/kinesis/streams/) and pipes events to [AWS Lambda](https://aws.amazon.com/lambda/) function.

## Usage

> Note: Serverless framework must be installed and AWS credentials must be configured first

To try this service, simply create Kinesis stream and run the following command:

```bash
serverless deploy -v --stream-arn <kinesis-stream-arn>
```

For more information about Serverless CLI check this [documentation](https://serverless.com/framework/docs/).

## License

The MIT License (MIT)

Copyright (c) 2016 Anton Bazhal

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
