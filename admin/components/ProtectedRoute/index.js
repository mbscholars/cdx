import React from "react"
import {Route} from "react-router-dom";
import protect from "admin/support/common/protect";
import {Button, Result} from "antd";
import {FormattedMessage} from "react-intl";

export default protect(Route, (
	<Result title="403"
	        status="403"
	        subTitle={
		        <FormattedMessage
			        defaultMessage="Sorry, you are not authorized to access this page."
			        id="common.unauthorized_access"/>
	        }
	        extra={
		        <a href="/">
			        <Button type="primary">
				        <FormattedMessage
					        defaultMessage="Back Home"
					        id="common.back_home"/>
			        </Button>
		        </a>
	        }/>
));