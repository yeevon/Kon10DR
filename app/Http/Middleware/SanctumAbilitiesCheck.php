<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class SanctumAbilitiesCheck
{
	public function handle($request, Closure $next, ...$abilities)
	{
		foreach ($abilities as $ability) {
			if (!$request->user()->tokenCan($ability)) {
				abort(400, 'Access denied');
			}
		}

		return $next($request);
	}
}
