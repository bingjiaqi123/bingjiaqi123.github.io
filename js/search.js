{{ $search := resources.Get "js/search.js" | minify | fingerprint }}
<script type="text/javascript" src="{{ $search.RelPermalink }}"></script>